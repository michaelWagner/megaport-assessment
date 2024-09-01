import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import AddItemForm from './AddItemForm.vue'

describe('AddItemForm.vue', () => {
  it('renders form fields and validates input', async () => {
    const wrapper = mount(AddItemForm, {
      props: {
        data: []
      }
    })

    // Check form fields
    expect(wrapper.find('input#type').exists()).toBe(true)
    expect(wrapper.find('input#topping').exists()).toBe(true)
    expect(wrapper.find('input#id').exists()).toBe(true)

    // Check validation for required fields
    await wrapper.find('input#type').setValue('')
    await wrapper.find('input#type').trigger('blur')
    expect(wrapper.find('#type-error').text()).toBe('Type cannot be empty')

    await wrapper.find('input#topping').setValue('')
    await wrapper.find('input#topping').trigger('blur')
    expect(wrapper.find('#topping-error').text()).toBe('Topping cannot be empty')
  })

  it('submits the form with valid data and emits "add" event', async () => {
    const wrapper = mount(AddItemForm, {
      props: {
        data: []
      }
    })

    await wrapper.find('input#type').setValue('Pizza')
    await wrapper.find('input#topping').setValue('Pepperoni')
    await wrapper.find('form').trigger('submit.prevent')

    const emittedEvents = wrapper.emitted('add')
    expect(emittedEvents).toBeTruthy()
    expect(emittedEvents[0]).toEqual([{
      id: '0001', // Expect the auto-generated ID
      type: 'Pizza',
      topping: 'Pepperoni'
    }])
  })

  it('does not submit the form if there are validation errors', async () => {
    const wrapper = mount(AddItemForm, {
      props: {
        data: []
      }
    })

    await wrapper.find('input#type').setValue('')
    await wrapper.find('input#type').trigger('blur')
    await wrapper.find('input#topping').setValue('Pepperoni')
    await wrapper.find('form').trigger('submit.prevent')

    const emittedEvents = wrapper.emitted('add')
    expect(emittedEvents).toBeFalsy() // Form should not be submitted
    expect(wrapper.find('.error').text()).toContain('Type cannot be empty')
  })

  it('auto-generates an ID if not provided', async () => {
    const wrapper = mount(AddItemForm, {
      props: {
        data: [{ id: '0001', type: 'Pizza', topping: 'Pepperoni' }]
      }
    })

    await wrapper.find('input#type').setValue('Burger')
    await wrapper.find('input#topping').setValue('Lettuce')
    await wrapper.find('form').trigger('submit.prevent')

    const emittedEvents = wrapper.emitted('add')
    expect(emittedEvents).toBeTruthy()
    expect(emittedEvents[0]).toEqual([{
      id: '0002', // Expect the next ID based on the existing data
      type: 'Burger',
      topping: 'Lettuce'
    }])
  })
})
