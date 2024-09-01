import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Pagination from './Pagination.vue'

describe('Pagination.vue', () => {
  it('renders the correct number of pages', () => {
    const wrapper = mount(Pagination, {
      props: {
        totalItems: 50,
        itemsPerPage: 10,
        currentPage: 1
      }
    })

    expect(wrapper.text()).toContain('Page 1 of 5')
  })

  it('emits the correct event when "Next" is clicked', async () => {
    const wrapper = mount(Pagination, {
      props: {
        totalItems: 50,
        itemsPerPage: 10,
        currentPage: 1
      }
    })

    const nextButton = wrapper.find('button:last-child')
    await nextButton.trigger('click')

    expect(wrapper.emitted('update:currentPage')).toBeTruthy()
    expect(wrapper.emitted('update:currentPage')[0]).toEqual([2])
  })

  it('emits the correct event when "Previous" is clicked', async () => {
    const wrapper = mount(Pagination, {
      props: {
        totalItems: 50,
        itemsPerPage: 10,
        currentPage: 2
      }
    })

    const prevButton = wrapper.find('button:first-child')
    await prevButton.trigger('click')

    expect(wrapper.emitted('update:currentPage')).toBeTruthy()
    expect(wrapper.emitted('update:currentPage')[0]).toEqual([1])
  })

  it('disables "Previous" button on the first page', () => {
    const wrapper = mount(Pagination, {
      props: {
        totalItems: 50,
        itemsPerPage: 10,
        currentPage: 1
      }
    })

    const prevButton = wrapper.find('button:first-child')
    expect(prevButton.attributes('disabled')).toBeDefined()
  })

  it('disables "Next" button on the last page', () => {
    const wrapper = mount(Pagination, {
      props: {
        totalItems: 50,
        itemsPerPage: 10,
        currentPage: 5
      }
    })

    const nextButton = wrapper.find('button:last-child')
    expect(nextButton.attributes('disabled')).toBeDefined()
  })
})
