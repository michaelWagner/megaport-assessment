<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const menuOpen = ref(false)

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

// Close menu if user clicks outside of it
const handleClickOutside = (event) => {
  const menuElement = document.querySelector('.menu')
  const hamburgerElement = document.querySelector('.hamburger')
  if (menuElement && !menuElement.contains(event.target) && !hamburgerElement.contains(event.target)) {
    toggleMenu()
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <header>
    <div class="logo-title">
      <img src="/megaport.svg" alt="Megaport Logo" class="logo" />
      <h1>Megaport Assessment</h1>
    </div>
    <nav>
      <button @click="toggleMenu" class="hamburger" aria-label="Toggle navigation">
        ☰
      </button>
      <transition name="fade">
        <ul v-if="menuOpen" class="menu">
          <li><router-link @click="menuOpen = false" to="/">Home</router-link></li>
          <li><router-link @click="menuOpen = false" to="/function-playground">Function Playground</router-link></li>
        </ul>
      </transition>
    </nav>
<<<<<<< HEAD
  </header> 
=======
  </header>
>>>>>>> 769a64f (Add function playground, routes, header, updated styles, pages, and services.)
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #1e1e1e;
  color: #00aaff;
}

.logo-title {
  display: flex;
  align-items: center;
}

.logo {
  height: 40px;
  margin-right: 10px;
}

nav {
  position: relative;
}

.hamburger {
  font-size: 24px;
  background: none;
  border: none;
  color: #00aaff;
  cursor: pointer;
  transition: color 0.3s ease, transform 0.3s ease;
}

.hamburger:hover {
  color: #007acc;
  transform: scale(1.1);
}

.menu {
  animation: slideIn 0.1s ease-in-out;
  background-color: #2b2b2b;
  border-radius: 4px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  list-style-type: none;
  padding: 10px;
  position: absolute;
  right: 0;
  top: 50px;
  width: max-content;
}

.menu li {
  margin: 10px 0;
}

.menu li a {
  color: #00aaff;
  display: block;
  text-decoration: none;
  transition: color 0.3s ease;
  width: 100%;
}

.menu li a:hover {
  color: #007acc;
}

/* Animation */
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Fade transition for menu */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>