<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits(['update:modelValue'])

const isOpen = ref(props.modelValue)

watch(() => props.modelValue, (newVal) => {
  isOpen.value = newVal
})

const closeModal = () => {
  isOpen.value = false
  emit('update:modelValue', false)
}
</script>

<template>
  <div v-if="isOpen" class="modal" @click.self="closeModal">
    <div class="modal-content">
      <div>
        <span class="sr-only">Close</span>
        <span class="close" @click="closeModal">&times;</span>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.modal {
  display: block;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  background-color: #1e1e1e;
  margin: 10% auto;
  padding: 20px;
  border: 1px solid #333;
  width: 80%;
  max-width: 500px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.7);
  color: #ffffff;
  border-radius: 8px;
}

.close {
  color: #ffffff;
  float: right;
  font-size: 24px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #00aaff;
  text-decoration: none;
  cursor: pointer;
}
</style>
