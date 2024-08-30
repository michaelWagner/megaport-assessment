<script setup>
import { ref } from 'vue'
import { getLocations } from '../services/locationsService'

const loading = ref(true)
const locations = ref([])
const selectedLocation = ref('')

const loadLocations = async () => {
  loading.value = true
  try {
    const { data } = await getLocations()
    locations.value = data
  } catch (error) {
    console.error('Failed to load locations:', error)
  } finally {
    loading.value = false
  }
}
loadLocations()
</script>

<template>
  <div class="card">
    <h3>Get Locations</h3>

    <em class="description">Test the getLocations function:</em>

    <div v-if="loading" class="loading-container">
      <div class="spinner"></div>
    </div>

    <div class="locations-select">
      <select v-if="locations.length" v-model="selectedLocation">
        <option value="" disabled>Select a location</option>
        <option v-for="location in locations" :key="location.id" :value="location.name">
          {{ location.name }}
        </option>
      </select>
    </div>

    <h2 v-if="selectedLocation">Selected Location:</h2>
    <div v-if="selectedLocation" class="value-section">
      <em class="value-found">
        {{ selectedLocation }}
      </em>
    </div>
  </div>
</template>

<style scoped>
.locations-select {
  margin: 1em 0;
} 
</style>