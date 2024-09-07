<template>
  <main>
    <div>
      <h1
        class="text-center mt-8 text-3xl font-semibold rotate-3 text-cyan-600 bg-orange-200 p-1 w-1/4 mx-auto rounded-lg"
      >
        Your Task
      </h1>
    </div>
    <!-- filter nav -->
    <div
      class="mx-auto w-1/5 mt-4 bg-red-200 flex justify-center gap-2 py-1 rounded-md"
    >
      <button @click="filter = 'all'">All tasks</button>
      <button @click="filter = 'favs'">Fav tasks</button>
    </div>

    <!-- task list -->
    <div class="max-w-[640px] my-8 mx-auto" v-if="filter === 'all'">
      <div v-for="task in taskStore.tasks" :key="task.id">
        <TaskDetails :task="task" />
      </div>
    </div>

    <!--fav task list -->
    <div class="max-w-[640px] my-8 mx-auto" v-if="filter === 'favs'">
      <div v-for="task in taskStore.favs" :key="task.id">
        <TaskDetails :task="task" />
      </div>
    </div>
  </main>
</template>

<script setup>
import { useTaskStore } from "../stores/taskStore";
import TaskDetails from "../components/TaskDetails.vue";
import { ref } from "vue";
const filter = ref("all");

// Using Pinia store
const taskStore = useTaskStore();
</script>
