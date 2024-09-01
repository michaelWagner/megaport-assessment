<script setup>
import { ref } from 'vue'
import { getValue } from '@/services/objectService'

const hasError = ref(false)
const path = ref('')
const submitted = ref(false)
const value = ref(undefined)

const data = ref({
  name: 'Megaport',
  address: {
    office: {
      unit: 'Level 3',
      street: '825 Ann Street',
      suburb: 'Fortitude Valley',
      city: 'Brisbane',
      state: 'Queensland',
      postcode: 4006,
    },
  },
  industry: {
    type: 'Internet and telecommunications',
    asxListed: true,
  },
})

const onSubmit = (e) => {
  e.preventDefault()
  value.value = getValue(path.value, data.value)
  submitted.value = true
}

const updateData = (event) => {
  hasError.value = false
  try {
    data.value = JSON.parse(event.target.innerText)
  } catch (error) {
    hasError.value = true
  }
}
</script>

<template>
  <div class="card">
    <h3>Get a value from an object using a specified path</h3>
    <em class="description">Test the getValue function with this object (editable):</em>

    <pre class="code-block" contenteditable="true" @blur="updateData">{{ JSON.stringify(data, null, 2) }}</pre>
    <p v-if="hasError" class="error">Invalid JSON format. Please correct it.</p>

    <div class="input-section">
      <form @submit="onSubmit">
        <label for="path">Enter object path e.g. 'address.office.suburb'</label>
        <input
          v-model="path"
          type="text"
          @keydown.enter.prevent="onSubmit"
          placeholder="Enter object path"
          aria-label="Object path input"
        />
        <button :disabled="hasError">Get Value</button>
      </form>
    </div>

    <p v-if="submitted && !value" class="error">
      No value found at the <span class="underline">{{ path }}</span> path</p>

    <h2 v-if="submitted && !!value">Value found:</h2>
    <div v-if="submitted && !!value" class="value-section">
      <span class="value-found">
        <pre class="code-block">{{ JSON.stringify(value, null, 2) }}</pre>
      </span>
    </div>
  </div>
</template>
