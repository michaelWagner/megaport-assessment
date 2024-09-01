import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import PathViewer from './PathViewer.vue'

vi.mock('@/services/objectService', () => ({
  getValue: vi.fn(),
}))

describe('PathViewer.vue', () => {
  it('shows an error when JSON is invalid', async () => {
    const wrapper = mount(PathViewer)

    // Find the editable JSON block
    const pre = wrapper.find('pre')

    // Set invalid JSON content and trigger a blur event
    pre.element.innerText = '{ invalid json }'
    await pre.trigger('blur')

    // Assert that the error message is shown
    expect(wrapper.find('.error').exists()).toBe(true)
    expect(wrapper.find('.error').text()).toContain('Invalid JSON format. Please correct it.')
  })

  it('shows the correct value when a valid path is provided', async () => {
    const wrapper = mount(PathViewer)
    const input = wrapper.find('input')

    input.setValue('address.office.suburb')
    await wrapper.find('form').trigger('submit.prevent')

    expect(wrapper.find('.value-section').exists()).toBe(true)
    expect(wrapper.find('.value-section').text()).toContain('Fortitude Valley')
  })

  it('shows an error message if no value is found at the provided path', async () => {
    const wrapper = mount(PathViewer)
    const input = wrapper.find('input')

    input.setValue('address.office.nonexistent')
    await wrapper.find('form').trigger('submit.prevent')

    expect(wrapper.find('.error').exists()).toBe(true)
    expect(wrapper.find('.error').text()).toContain('No value found at the address.office.nonexistent path')
  })
})
