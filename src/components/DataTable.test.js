import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import DataTable from './DataTable.vue'

describe('DataTable.vue', () => {
  const headers = [
    { key: 'id', label: 'ID' },
    { key: 'type', label: 'Type' },
    { key: 'topping', label: 'Topping' }
  ]

  const data = [
    { id: 1, type: 'Pizza', topping: 'Pepperoni' },
    { id: 2, type: 'Pizza', topping: 'Mushrooms' },
    { id: 3, type: 'Burger', topping: 'Cheese' },
    { id: 4, type: 'Burger', topping: 'Bacon' }
  ]

  it('renders sorted data correctly', async () => {
    const wrapper = mount(DataTable, {
      props: {
        data,
        sortKey: 'type',
        isAsc: true,
        headers
      }
    })

    const rows = wrapper.findAll('tbody tr')
    expect(rows).toHaveLength(4)
    expect(rows[0].text()).toContain('Burger')
  })

  it('emits events to update sorting', async () => {
    const wrapper = mount(DataTable, {
      props: {
        data,
        sortKey: 'type',
        isAsc: true,
        headers
      }
    })

    const typeHeader = wrapper.find('th:first-child')
    await typeHeader.trigger('click')

    expect(wrapper.emitted('update:sortKey')).toBeTruthy()
    expect(wrapper.emitted('update:isAsc')).toBeTruthy()
  })

  it('displays a message when no data is available', () => {
    const wrapper = mount(DataTable, {
      props: {
        data: [],
        sortKey: 'id',
        isAsc: true,
        headers
      }
    })

    expect(wrapper.find('.no-content').text()).toBe('No data available')
  })
})
