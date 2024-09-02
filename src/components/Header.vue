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
    <div class="top-menu-container">
      <nav class="top-menu view-container">
        <ul>
          <li><router-link to="/baked-goods">Baked Goods</router-link></li>
          <li><router-link to="/code-sandbox">Code Sandbox</router-link></li>
        </ul>
      </nav>
    </div>
    <div class="header-container view-container">
      <router-link to="/" class="home-link">
        <div class="logo-title">
          <img src="/megaport.svg" alt="Megaport Logo" class="logo" />
          <h1>Megaport Assessment</h1>
        </div>
      </router-link>
      <nav class="mobile-nav">
        <button @click="toggleMenu" class="hamburger" aria-label="Toggle navigation">
          ☰
        </button>
        <transition name="fade">
          <ul v-if="menuOpen" class="menu">
            <li><router-link @click="menuOpen = false" to="/">Home</router-link></li>
            <li><router-link @click="menuOpen = false" to="/code-sandbox">Code Sandbox</router-link></li>
          </ul>
        </transition>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 20px;
  background-color: #0C1124;
  color: #F1F5F9;
}

.top-menu-container {
  background: linear-gradient(90deg,#6500D1 -2.13%,#1AA0FF 102.36%);
  display: block;
}

@media (max-width: 768px) {
.top-menu-container {
    display: none;
  }
}

.top-menu {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}

.top-menu ul {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: row;
  gap: 2rem;
  margin: 0;
  padding: 0.7rem;
  width: 50%;
}

.top-menu li {
  color: #F1F5F9;
  display: block;
  text-decoration: none;
}

.top-menu li a {
  color: #F1F5F9;
  font-weight: 600;
  font-size: 0.9rem;
  display: block;
  text-decoration: none;
}

.top-menu li a:hover {
  color: #CBD5F5;
}

.home-link {
  text-decoration: none;
}
.logo-title {
  display: flex;
  align-items: center;
}

.logo-title h1 {
  font-size: 1.6rem;
  font-weight: bolder;
  letter-spacing: -0.4px;
}

.logo {
  height: 40px;
  margin-right: 10px;
}

nav {
  position: relative;
}

nav.mobile-nav {
  display: none;
}

@media (max-width: 768px) {
  nav.mobile-nav {
    display: block;
  }
}

.hamburger {
  font-size: 24px;
  background: none;
  border: none;
  color: #F1F5F9;
  cursor: pointer;
  font-size: 2rem !important;
  padding: 0;
  transition: color 0.3s ease, transform 0.3s ease;
}

.hamburger:hover {
  color: #e30b5c;
  transform: scale(1.1);
}

.menu {
  animation: slideIn 0.1s ease-in-out;
  background-color: #141c3b;
  border-radius: 4px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  list-style-type: none;
  padding: 10px;
  position: absolute;
  right: 0;
  top: 50px;
  width: 150px;
}

.menu li {
  margin: 10px 0;
}

.menu li a {
  color: #F1F5F9;
  display: block;
  text-decoration: none;
  transition: color 0.3s ease;
  width: 100%;
}

.menu li a:hover {
  color: #e30b5c;
}

/* Fade transition for menu */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>