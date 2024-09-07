import { defineStore } from "pinia";

export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    tasks: [
      { id: 1, title: "buy some milk", isFav: false, isDone: false },
      { id: 2, title: "play Boardgame", isFav: true, isDone: false },
      { id: 3, title: "learn Vue 3", isFav: false, isDone: false },
    ],
  }),

  // Getters
  getters: {
    favs() {
      return this.tasks.filter((task) => task.isFav);
    },
    doneTasks(state) {
      return state.tasks.filter((task) => task.isDone);
    },
  },

  // Actions
  actions: {
    addTask(task) {
      this.tasks.push(task);
    },
    toggleFavorite(id) {
      const task = this.tasks.find((task) => task.id === id);
      if (task) task.isFav = !task.isFav;
    },
    toggleDone(id) {
      const task = this.tasks.find((task) => task.id === id);
      if (task) task.isDone = !task.isDone;
    },
    removeTask(id) {
      this.tasks = this.tasks.filter((task) => task.id !== id);
    },
  },
});
