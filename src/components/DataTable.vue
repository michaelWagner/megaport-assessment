<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  data: {
    type: Array,
    required: true
  },
  sortKey: {
    type: String,
    required: true
  },
  isAsc: {
    type: Boolean,
    required: true
  },
  headers: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['update:sortKey', 'update:isAsc'])

const sortBy = (key) => {
  if (props.sortKey === key) {
    emit('update:isAsc', !props.isAsc)
  } else {
    emit('update:sortKey', key)
    emit('update:isAsc', true)
  }
}

const getAriaSort = (key) => {
  if (props.sortKey === key) {
    return props.isAsc ? 'ascending' : 'descending'
  }
  return 'none'
}

const sortedData = computed(() => {
  return [...props.data].sort((a, b) => {
    const order = props.isAsc ? 1 : -1
    if (a[props.sortKey] > b[props.sortKey]) return order
    if (a[props.sortKey] < b[props.sortKey]) return -order
    return 0
  })
})
</script>

<template>
  <div>
    <table>
      <thead>
        <tr>
          <th v-for="header in headers" 
            :key="header.key" 
            @click="sortBy(header.key)"
            :aria-sort="getAriaSort(header.key)">
            {{ header.label }}
            <span v-if="sortKey === header.key">
              <span v-if="isAsc">▲</span>
              <span v-else>▼</span>
            </span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in sortedData" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.type }}</td>
          <td>{{ item.topping }}</td>
        </tr>
      </tbody>
    </table>
    <slot></slot>
  </div>
</template>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th, td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

th {
  cursor: pointer;
  background-color: #f7f7f7;
  position: relative;
}

th:hover {
  background-color: #f1f1f1;
}

th span {
  font-size: 0.8em;
  margin-left: 8px;
}

tr:nth-child(odd) {
  background-color: #f9f9f9;
}

tr:nth-child(even) {
  background-color: #ffffff;
}

tr:hover {
  background-color: #f1f1f1;
}
</style>
