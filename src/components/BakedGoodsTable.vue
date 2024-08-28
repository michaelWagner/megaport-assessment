<script setup>
import { ref, computed } from 'vue'

const bakedGoods = ref([
  { id: 1, type: 'Cake', topping: 'Chocolate' },
  { id: 2, type: 'Pie', topping: 'Apple' },
  { id: 3, type: 'Cake', topping: 'Vanilla' },
  { id: 4, type: 'Tart', topping: 'Lemon' },
])

const filterText = ref('')
const sortKey = ref('id')
const sortOrder = ref(1)

const filteredData = computed(() => {
  return bakedGoods.value
    .filter((item) =>
      [item.type, item.topping].some((field) =>
        field.toLowerCase().includes(filterText.value.toLowerCase())
      )
    )
    .sort((a, b) => {
      if (a[sortKey.value] > b[sortKey.value]) return sortOrder.value
      if (a[sortKey.value] < b[sortKey.value]) return -sortOrder.value
      return 0
    })
})

const sortData = (key) => {
  if (sortKey.value === key) {
    sortOrder.value = -sortOrder.value
  } else {
    sortKey.value = key
    sortOrder.value = 1
  }
}
</script>

<template>
  <div>
    <h1>Baked Goods</h1>
    <input
      v-model="filterText"
      type="text"
      placeholder="Filter by type or topping..."
    />
    <table>
      <thead>
        <tr>
          <th @click="sortData('id')">ID</th>
          <th @click="sortData('type')">Type</th>
          <th @click="sortData('topping')">Topping</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in filteredData" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.type }}</td>
          <td>{{ item.topping }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}
th {
  cursor: pointer;
  background-color: #f2f2f2;
  padding: 10px;
  text-align: left;
}
th:hover {
  background-color: #ddd;
}
td {
  padding: 10px;
  border-bottom: 1px solid #ddd;
}
</style>
