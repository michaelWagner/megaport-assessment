<script setup>
import { ref } from 'vue'
import { getValue } from '../services/objectService'

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
  <div class="container">
    <h1>Get an object's value</h1>

    <p>Test the getValue function with this object (editable):</p>
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

    <p v-if="submitted && !value" class="error">No value found at the specified path</p>

    <h2 v-if="submitted && !!value">Value found:</h2>
    <div v-if="submitted && !!value" class="value-section">
      <span class="value-found">
        <pre class="code-block">{{ JSON.stringify(value, null, 2) }}</pre>
      </span>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  border-radius: 8px;
  background-color: #2b2b2b;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
}

h1, h2 {
  color: #00aaff;
  text-align: left;
}

.input-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}


.code-block {
  background-color: #282c34;
  color: #61dafb;
  padding: 15px;
  border-radius: 4px;
  font-family: 'Courier New', Courier, monospace;
  white-space: pre-wrap;
  word-wrap: break-word;
  outline: none;
}

.value-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
}

.value-found {
  font-size: 1.2em;
  font-weight: bold;
  margin-left: 10px;
}
</style>
