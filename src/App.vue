<script setup>
import Header from './components/Header.vue'
</script>

<template>
  <div>
    <Header />
    <div class="view-container">
      <RouterView />
    </div>
  </div>
</template>
