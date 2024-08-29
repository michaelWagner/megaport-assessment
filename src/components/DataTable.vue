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
            <div>
              {{ header.label }}
              <span v-if="sortKey === header.key">
                <span v-if="isAsc">▲</span>
                <span v-else>▼</span>
              </span>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <template v-if="sortedData.length">
          <tr v-for="(item, idx) in sortedData" :key="`${idx}${item.id}`"><!-- item.id may not be unique -->
            <td>{{ item.id }}</td>
            <td>{{ item.type }}</td>
            <td>{{ item.topping }}</td>
          </tr>
        </template>
        <template v-else>
          <tr>
            <td class="no-content" :colspan="headers.length">No data available</td>
          </tr>
        </template>
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
  table-layout: auto;
}

th, td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: normal;
}

th {
  cursor: pointer;
  background-color: #f7f7f7;
  position: relative;
  min-width: 120px;
}

th div {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

th:hover {
  background-color: #f1f1f1;
}

th div span {
  font-size: 0.8em;
  margin-left: 8px;
  flex-shrink: 0;
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

td.no-content {
  text-align: center;
  padding: 16px;
}

/* Mobile Screens */
@media screen and (max-width: 600px) {
  th, td {
    padding: 8px;
    font-size: 0.9em;
  }

  th div {
    flex-direction: column;
    align-items: flex-start;
  }

  th span {
    margin-left: 0;
    margin-top: 4px;
  }
}

</style>
