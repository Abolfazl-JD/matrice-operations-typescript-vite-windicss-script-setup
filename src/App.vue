<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core"
import CalculatorDisplayer from "./components/CalculatorDisplayer.vue"

const isDark = useDark()
const toggleThemeMode = useToggle(isDark)
</script>

<template>
  <header>
    <nav class="w-full py-4 px-2 bg-sky-600">
      <div class="flex justify-between">
        <h2 class="text-white text-2xl font-bold">𝓜𝓪𝓽𝓻𝓲𝓬𝓮 𝓬𝓪𝓵𝓬𝓾𝓵𝓪𝓽𝓸𝓻</h2>
        <div class="theme-switcher pr-5" @click="toggleThemeMode()">
          <transition mode="out-in" name="theme-switch">
            <svg
              v-if="isDark"
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8 text-yellow-400 cursor-pointer"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                clip-rule="evenodd"
              />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8 text-yellow-100 cursor-pointer"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
              />
            </svg>
          </transition>
        </div>
      </div>
    </nav>
  </header>

  <main class="mt-6">
    <CalculatorDisplayer />
  </main>
</template>

<style>
@import "./assets/base.css";

.theme-switch-enter-from {
  opacity: 0;
  transform: translateX(-10px);
}

.theme-switch-enter-active,
.theme-switch-leave-active {
  transition: all 0.3s ease;
}

.theme-switch-leave-to {
  opacity: 0;
  transform: translateX(10px);
}
</style>
