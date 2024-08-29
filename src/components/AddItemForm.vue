<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  data: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['add', 'close'])

const form = ref({ id: '', type: '', topping: '' })
const errors = ref({ id: '', type: '', topping: '' })

const hasError = computed(() => {
  return Object.values(errors.value).some(error => error !== '')
})

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

  if (field === 'id') {
    if (isNaN(form.value.id)) {
      errors.value.id = 'ID must be a number'
      isValid = false
    } else {
      errors.value.id = ''
    }
  }

  return isValid
}

const generateNextId = () => {
  if (props.data.length === 0) {
    return '0001'
  }

  const ids = props.data.map(item => parseInt(item.id))
  const maxId = Math.max(...ids)
  const nextId = (maxId + 1).toString().padStart(4, '0')

  return nextId
}

const handleSubmit = () => {
  const isFormValid = validate()

  if (isFormValid) {
    // If the id is not provided or is not a number, generate the next id
    const id = form.value.id.trim() !== '' && !isNaN(form.value.id)
    ? form.value.id.toString().padStart(4, '0')
    : generateNextId()

    emit('add', { ...form.value, id })
    form.value = { id: '', type: '', topping: '' }
    emit('close')
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
    <div>
      <label for="id">Id (Optional):</label>
      <input
        id="id"
        v-model="form.id"
        @blur="validate('id')"
        type="text"
        placeholder="Enter id (optional)"
        aria-describedby="id-error"
      />
      <span v-if="errors.id" id="id-error" class="error">{{ errors.id }}</span>
    </div>
    <button type="submit" :disabled="hasError">Add</button>
  </form>
</template>

