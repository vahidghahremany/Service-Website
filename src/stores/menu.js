import { defineStore } from "pinia";

export const useMenuStore = defineStore("menuStore", {
  state: () => ({
    isOpen: false,
  }),

  actions: {
    openMenu() {
      this.isOpen = true;
    },
    closeMenu() {
      this.isOpen = false;
    },
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
  },
});
