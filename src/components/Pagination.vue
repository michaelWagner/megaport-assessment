<script setup>
import { computed } from 'vue'

const props = defineProps({
  totalItems: {
    type: Number,
    required: true
  },
  itemsPerPage: {
    type: Number,
    default: 10
  },
  currentPage: {
    type: Number,
    default: 1
  }
})

const emit = defineEmits(['update:currentPage'])

const totalPages = computed(() => Math.ceil(props.totalItems / props.itemsPerPage))

const changePage = (page) => {
  if (page > 0 && page <= totalPages.value) {
    emit('update:currentPage', page)
  }
}
</script>

<template>
  <div class="pagination">
    <button class="prev-btn" @click.prevent="changePage(currentPage - 1)" :disabled="currentPage === 1">
      <span>&#9664;</span> <!-- Left-pointing triangle -->
    </button>
    <span>Page {{ currentPage }} of {{ totalPages }}</span>
    <button class="next-btn" @click.prevent="changePage(currentPage + 1)" :disabled="currentPage === totalPages">
      <span>&#9654;</span> <!-- Right-pointing triangle -->
    </button>
  </div>
</template>

<style scoped>
.pagination {
  align-items: center;
  display: flex;
  gap: 15px;
  justify-content: center;
  margin-top: 20px;
}

.pagination .prev-btn, .next-btn {
  cursor: pointer;
  background: none;
  color: #007bff;
}

.pagination .prev-btn:hover, .next-btn:hover {
  color: #0056b3;
}

.pagination .prev-btn:disabled, .next-btn:disabled {
  color: #ccc;
  cursor: not-allowed;
}
</style>
