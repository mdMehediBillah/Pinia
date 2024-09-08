<template>
  <main>
    <div>
      <h1
        class="text-center mt-8 text-3xl font-semibold rotate-3 text-cyan-600 bg-orange-200 p-1 w-1/4 mx-auto rounded-lg"
      >
        Your Task
      </h1>
    </div>
    <!-- Add task -->
    <div class="max-w-[520px] mt-8 mx-auto">
      <TaskForm />
    </div>
    <!-- filter nav -->
    <div
      class="mx-auto w-1/5 my-2 bg-red-200 flex justify-center gap-1 py-1 rounded-md"
    >
      <button
        @click="filter = 'all'"
        class="hover:bg-rose-300 py-1 px-3 rounded border-orange-500"
        :class="{ 'border-b-4': filter === 'all' }"
      >
        All tasks
      </button>
      <button
        @click="filter = 'favs'"
        class="hover:bg-rose-300 py-1 px-3 rounded border-orange-500"
        :class="{ 'border-b-4': filter === 'favs' }"
      >
        Fav tasks
      </button>
      <button @click="taskStore.$reset">Reset</button>
    </div>

    <!-- loading -->
    <div v-if="loading" class="text-center mt-8">
      <p>Loading...</p>
    </div>

    <!-- task list -->
    <div class="max-w-[640px] my-8 mx-auto" v-if="filter === 'all' && !loading">
      <p>You have {{ totalCount }} tasks left to do</p>
      <div v-for="task in tasks" :key="task.id">
        <TaskDetails :task="task" />
      </div>
    </div>

    <!--fav task list -->
    <div
      class="max-w-[640px] my-8 mx-auto"
      v-if="filter === 'favs' && !loading"
    >
      <p>You have {{ favsCount }} fav tasks left to do</p>
      <div v-for="task in favs" :key="task.id">
        <TaskDetails :task="task" />
      </div>
    </div>
  </main>
</template>

<script setup>
import { useTaskStore } from "../stores/taskStore";
import TaskDetails from "../components/TaskDetails.vue";
import TaskForm from "../components/TaskForm.vue";
import { ref, computed } from "vue";
import { storeToRefs } from "pinia";

// Local state
const filter = ref("all");

// Using Pinia store
const taskStore = useTaskStore();
const { tasks, loading, favs, totalCount, favsCount } = storeToRefs(taskStore);

// Fetch tasks on component load
taskStore.getTasks();
</script>
