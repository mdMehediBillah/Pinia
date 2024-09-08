<template>
  <form @submit.prevent="handleSubmit" class="flex">
    <input
      type="text"
      v-model="newTask"
      placeholder="Enter your task"
      class="w-full p-2 border-2 border-cyan-600 rounded-l-lg focus:outline-none focus:border-cyan-700"
    />
    <button
      type="submit"
      class="bg-cyan-800 text-white w-1/4 rounded-r-lg hover:bg-rose-600 focus:outline-none outline-none"
    >
      Add Task
    </button>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { useTaskStore } from "../stores/taskStore";

const newTask = ref("");
const taskStore = useTaskStore();
const handleSubmit = () => {
  if (newTask.value.length > 0) {
    taskStore.addTask({
      title: newTask.value,
      isFav: false,
      id: Math.floor(Math.random() * 1000),
    });
  }
  newTask.value = "";
};
</script>

<style scoped></style>
