<script setup>
import { computed, ref } from 'vue'
import DataTable from './components/DataTable.vue'
import AddBakedGoodsForm from './components/AddBakedGoodsForm.vue'

const data = ref([
  { id: 1, type: 'Cake', topping: 'Chocolate' },
  { id: 2, type: 'Pie', topping: 'Apple' },
  { id: 3, type: 'Cake', topping: 'Vanilla' },
  { id: 4, type: 'Tart', topping: 'Lemon' },
])

const headers = [
  { key: 'id', label: 'ID' },
  { key: 'type', label: 'Type' },
  { key: 'topping', label: 'Topping' }
]

const filterText = ref('')
const isAsc = ref(true)
const sortKey = ref('id')

const filteredData = computed(() => {
  return data.value.filter(item =>
    item.type.toLowerCase().includes(filterText.value.toLowerCase()) ||
    item.topping.toLowerCase().includes(filterText.value.toLowerCase())
  )
})

const handleAddNewItem = (newItem) => {
  data.value.push(newItem)
}
</script>

<template>
  <div>
    <h1>Baked Goods Management</h1>
    <div class="filter-input-container">
      <label for="filter-text" class="sr-only">Filter table</label>
      <input
        id="filter-text"
        v-model="filterText"
        type="text"
        placeholder="Filter by type or topping..."
        aria-label="Filter table"
        @input="handleFilter" />
    </div>

    <DataTable
      :data="filteredData"
      :sortKey="sortKey"
      :isAsc="isAsc"
      :headers="headers"
      @update:sortKey="sortKey = $event"
      @update:isAsc="isAsc = $event">
      <AddBakedGoodsForm :data="data" @add="handleAddNewItem" />
    </DataTable>
  </div>
</template>
