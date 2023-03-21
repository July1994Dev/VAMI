import { defineStore } from "pinia";

const useProductStore = defineStore("product", {
  state: () => ({
    count: 0,
    name: "Eduardo",
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++;
    },
  },
});
export default useProductStore;