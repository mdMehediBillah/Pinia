<template>
  <div
    class="flex py-4 px-4 bg-cyan-50 mt-4 shadow-lg justify-between items-center gap-4 rounded-lg"
  >
    <h1>{{ task.title }}</h1>
    <div class="flex items-center gap-1">
      <div class="">
        <i
          class="fa-solid fa-trash p-2 hover:bg-rose-200 rounded-lg cursor-pointer text-gray-500 hover:text-rose-600"
        ></i>
      </div>
      <div class="icon">
        <i
          class="fa-solid fa-heart p-2 hover:bg-cyan-200 rounded-lg cursor-pointer text-gray-500 hover:text-cyan-600"
        ></i>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

// Define props using defineProps function
const props = defineProps({
  task: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped></style>
