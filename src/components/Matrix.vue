<script setup lang="ts">
import { computed, ref } from "vue"

const matrixColumns = ref(2)
const matrixRows = ref(2)

const myNewMatrix = computed(() => {
  return new Array(matrixRows.value)
    .fill(0)
    .map((c) => new Array(matrixColumns.value).fill(0))
})

const multiplyNumber = ref(2)
const poweredNumber = ref(2)
</script>

<template>
  <div
    class="w-1/4 bg-white border border-solid border-gray-600 p-1 self-start"
  >
    <h3
      class="w-full bg-green-500 font-bold text-xl text-white py-1 pl-1 text-center"
    >
      <slot></slot>
    </h3>
    <div class="flex gap-6 mt-2">
      <div class="row">
        <span class="block pl-2">Row</span>
        <div class="flex gap-1">
          <input
            v-model.number="matrixRows"
            type="text"
            class="inline-block w-11 rounded self-center focus:caret-green-800 h-7 pl-2 border-green-500 border-2 border-solid outline-none"
          />
          <div class="inline-block">
            <svg
              @click="matrixRows < 5 ? matrixRows++ : null"
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5 15l7-7 7 7"
              />
            </svg>
            <svg
              @click="matrixRows > 0 ? matrixRows-- : null"
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>
      <span class="self-center text-4xl">×</span>
      <div class="row">
        <span class="block">Column</span>
        <div class="flex gap-1 mt-1">
          <input
            v-model.number="matrixColumns"
            type="text"
            class="inline-block w-11 rounded self-center focus:caret-green-800 h-7 pl-2 border-green-500 border-2 border-solid outline-none"
          />
          <div class="inline-block">
            <svg
              @click="matrixColumns > 0 ? matrixColumns-- : null"
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 inline-block cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <svg
              @click="matrixColumns < 6 ? matrixColumns++ : null"
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 inline-block cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-5">
      <div
        class="grid grid-cols-6 gap-2 mt-1"
        v-for="matrixRow of matrixRows"
        :key="matrixRow"
        :data-index="matrixRow"
      >
        <input
          v-for="matrixCol of matrixColumns"
          :key="matrixCol"
          v-model="myNewMatrix[matrixRow - 1][matrixCol - 1]"
          type="text"
          class="inline-block rounded self-center h-7 pl-2 border-orange-500 border-2 border-solid outline-none"
        />
      </div>
    </div>
    <div class="mt-7">
      <div class="flex gap-2 justify-around">
        <button class="functional-btn">Determinant</button>
        <button class="functional-btn">Invrese</button>
        <button class="functional-btn">Transpose</button>
        <button class="functional-btn">clear</button>
      </div>
      <div class="flex gap-2 justify-around mt-1">
        <div class="flex">
          <button class="functional-btn rounded-tr-none rounded-br-none">
            powered by
          </button>
          <input
            v-model.number="poweredNumber"
            type="text"
            class="inputFunction"
          />
        </div>
        <button class="functional-btn">random</button>
        <div class="flex">
          <button class="functional-btn rounded-tr-none rounded-br-none">
            multiply by
          </button>
          <input
            v-model.number="multiplyNumber"
            type="text"
            class="inputFunction"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
