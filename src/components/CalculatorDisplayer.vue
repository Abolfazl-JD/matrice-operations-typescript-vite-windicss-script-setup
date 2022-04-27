<script lang="ts" setup>
import Matrix from "./Matrix.vue"
</script>

<template>
  <div class="container w-full px-9">
    <div class="flex justify-between">
      <Matrix />
      <div class="self-start mt-10">
        <button class="text-xl mx-auto operations-buttons">→ <br />←</button>
        <button class="operations-buttons">A + B</button>
        <button class="operations-buttons">A - B</button>
        <button class="operations-buttons">A × B</button>
      </div>
      <Matrix />
    </div>
    <div class="w-full bg-red-500 text-white p-2 text-center text-3xl mt-2">
      Result
    </div>
    <table
      class="matrixTable mx-auto border-collapse border-l-black border-solid border-l-2 border-r-black border-r-2 mt-5"
    >
      <tbody>
        <tr>
          <th
            class="w-1 border-t-2 border-t-black border-t-solid border-b-2 border-b-black border-b-solid p-0"
          ></th>
          <th class="p-0">
            <table>
              <tbody>
                <tr class="font-bold text-xl flex gap-6">
                  <td>4</td>
                  <td>2</td>
                  <td>0</td>
                </tr>
                <tr class="font-bold text-xl flex gap-6">
                  <td>1</td>
                  <td>5</td>
                  <td>0</td>
                </tr>
                <tr class="font-bold text-xl flex gap-6">
                  <td>4</td>
                  <td>2</td>
                  <td>0</td>
                </tr>
                <tr class="font-bold text-xl flex gap-6">
                  <td>4</td>
                  <td>2</td>
                  <td>0</td>
                </tr>
                <tr class="font-bold text-xl flex gap-6">
                  <td>4</td>
                  <td>2</td>
                  <td>0</td>
                </tr>
              </tbody>
            </table>
          </th>
          <th
            class="w-1 border-t-2 border-t-black border-t-solid border-b-2 border-b-black border-b-solid p-0"
          ></th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style></style>
