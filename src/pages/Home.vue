<script setup>
import { computed, ref } from 'vue'
import DataTable from '@/components/DataTable.vue'
import AddItemForm from '@/components/AddItemForm.vue'
import Modal from '@/components/Modal.vue'
import { BAKED_GOODS } from '@/constants'

const data = ref(BAKED_GOODS.initialData)

const headers = [
  { key: 'id', label: 'ID' },
  { key: 'type', label: 'Type' },
  { key: 'topping', label: 'Topping' }
]

const filterText = ref('')
const isAsc = ref(true)
const showModal = ref(false)
const sortKey = ref('id')


const filteredData = computed(() => {
  return data.value.filter(item =>
    item.id.toLowerCase().includes(filterText.value.toLowerCase()) ||
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
    <h2>Baked Goods</h2>
    <div class="action-container">
      <button @click="showModal = true">Add Item</button>
      <label for="filter-text" class="sr-only">Filter table</label>
      <input
        id="filter-text"
        v-model="filterText"
        type="text"
        placeholder="Filter data..."
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
    </DataTable>
    <Modal v-model="showModal">
      <AddItemForm :data="data" @add="handleAddNewItem" @close="showModal = false" />
    </Modal>
  </div>
</template>

<style scoped>
.action-container {
  display: flex;
  gap: 20px;
  justify-content: space-between;
  margin: 16px 0;
}
</style>