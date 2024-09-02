<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isAnimating = ref(false)

onMounted(() => {
  isAnimating.value = true
})

const navigateTo = (path) => {
  isAnimating.value = false
  setTimeout(() => {
    router.push(path)
  }, 500) // Delay to let the exit animation play
}
</script>

<template>
  <div class="splash-page" :class="{ 'animate-in': isAnimating, 'animate-out': !isAnimating }">
    <div class="content">
      <h1 class="headline">Welcome to Megaport</h1>
      <p class="sub-headline">Unleash the Power of Connectivity with Megaport</p>
      <div class="buttons">
        <button @click="navigateTo('/baked-goods')" class="link-button">Explore Baked Goods</button>
        <button @click="navigateTo('/code-sandbox')" class="link-button">Visit Code Sandbox</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.splash-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 65vh;
  color: #F1F5F9;
  overflow: hidden;
}

.content {
  text-align: center;
  max-width: 600px;
  animation: fadeIn 1.5s ease-in-out;
}

.headline {
  font-size: 3em;
  margin-bottom: 20px;
  color: #F1F5F9;
  text-align: center;
  animation: slideInDown 1s ease-in-out;
}

.sub-headline {
  font-size: 1.5em;
  margin-bottom: 40px;
  color: #E2E8F0;
  animation: slideInUp 1s ease-in-out;
}

.buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
  animation: zoomIn 1s ease-in-out;
}

button.link-button {
  color: white;
  font-weight: 700;
  padding: 0.625rem 2rem;
  border: none;
  border-radius: 3.125rem;
  cursor: pointer;
  font-size: 1.2em;
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.link-button:hover {
  transform: scale(1.1);
}

.animate-in {
  animation: fadeInPage 1s forwards;
}

.animate-out {
  animation: fadeOutPage 0.5s forwards;
}

/* Keyframes */
@keyframes fadeInPage {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeOutPage {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInDown {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slideInUp {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes zoomIn {
  from {
    transform: scale(0.5);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
