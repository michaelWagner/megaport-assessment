<script setup>
import { ref, defineEmits, watch } from 'vue'

const props = defineProps({
  data: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['add'])

const form = ref({ type: '', topping: '' })
const errors = ref({ type: '', topping: '' })

const validate = (field) => {
  let isValid = true

  if (field === 'type' || !field) {
    if (!form.value.type) {
      errors.value.type = 'Type cannot be empty'
      isValid = false
    } else {
      errors.value.type = ''
    }
  }

  if (field === 'topping' || !field) {
    if (!form.value.topping) {
      errors.value.topping = 'Topping cannot be empty'
      isValid = false
    } else {
      errors.value.topping = ''
    }
  }

  return isValid
}

const handleSubmit = () => {
  const isFormValid = validate()

  if (isFormValid) {
    const nextId = props.data.length > 0
      ? Math.max(...props.data.map(item => item.id)) + 1
      : 1

    emit('add', { id: nextId, ...form.value })
    form.value = { type: '', topping: '' }
  }
}
</script>

<template>
  <form @submit.prevent="handleSubmit" aria-labelledby="form-title">
    <h2 id="form-title">Add Item</h2>
    <div>
      <label for="type">Type:</label>
      <input
        id="type"
        v-model="form.type"
        type="text"
        @blur="validate('type')"
        placeholder="Enter type"
        aria-required="true"
        aria-describedby="type-error"
      />
      <span v-if="errors.type" id="type-error" class="error">{{ errors.type }}</span>
    </div>
    <div>
      <label for="topping">Topping:</label>
      <input
        id="topping"
        v-model="form.topping"
        type="text"
        @blur="validate('topping')"
        placeholder="Enter topping"
        aria-required="true"
        aria-describedby="topping-error"
      />
      <span v-if="errors.topping" id="topping-error" class="error">{{ errors.topping }}</span>
    </div>
    <button type="submit">Add</button>
  </form>
</template>

