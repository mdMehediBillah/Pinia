import { defineStore } from "pinia";

export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    tasks: [],
    loading: false,
  }),

  // Getters
  getters: {
    favs(state) {
      return state.tasks.filter((task) => task.isFav);
    },
    favsCount(state) {
      return state.tasks.reduce((p, c) => (c.isFav ? p + 1 : p), 0);
    },
    totalCount(state) {
      return state.tasks.length;
    },
  },

  // Actions
  actions: {
    async getTasks() {
      this.loading = true;
      try {
        const response = await fetch("http://localhost:3000/tasks");
        if (!response.ok) {
          throw new Error("Failed to fetch tasks");
        }
        const data = await response.json();
        this.tasks = data;
      } catch (error) {
        console.error("Error fetching tasks:", error.message);
      } finally {
        this.loading = false;
      }
    },

    async addTask(task) {
      this.tasks.push(task);
      try {
        const response = await fetch("http://localhost:3000/tasks", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(task),
        });

        if (!response.ok) {
          throw new Error("Failed to add task");
        }
      } catch (error) {
        console.error("Error adding task:", error.message);
      }
    },

    async deleteTask(id) {
      this.tasks = this.tasks.filter((task) => task.id !== id);
      // try {
      //   const response = await fetch(`http://localhost:3000/tasks/${id}`, {
      //     method: "DELETE",
      //   });

      //   if (!response.ok) {
      //     throw new Error("Failed to delete task");
      //   }
      // } catch (error) {
      //   console.error("Error deleting task:", error.message);
      // }
    },

    async toggleFav(id) {
      const task = this.tasks.find((task) => task.id === id);
      if (!task) return;

      task.isFav = !task.isFav;

      // try {
      //   const response = await fetch(`http://localhost:3000/tasks/${id}`, {
      //     method: "PATCH",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify({ isFav: task.isFav }),
      //   });

      //   if (!response.ok) {
      //     throw new Error("Failed to toggle favorite status");
      //   }
      // } catch (error) {
      //   console.error("Error toggling favorite status:", error.message);
      // }
    },
  },
});
