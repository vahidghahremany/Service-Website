import { defineStore } from "pinia";
import { initialTables } from "@/data/tablesInfo";

export const useReservationStore = defineStore("reservation", {
  state: () => ({
    tables: initialTables,

    selectedTableId: null,
    isSidebarOpen: false,

    isSubmitting: false,
    showSuccessModal: false,

    hasSubmitted: false,

    form: {
      name: "",
      phone: "",
      date: new Date().toISOString().split("T")[0],
      time: "08:00 PM",
      guests: 2,
      note: "",
    },

    toast: {
      visible: false,
      message: "",
      type: "info",
    },
  }),

  getters: {
    getSelectedTable: (state) => state.tables.find((t) => t.id === state.selectedTableId),
  },

  actions: {
    showToast(message, type = "info") {
      this.toast.message = message;
      this.toast.type = type;
      this.toast.visible = true;

      setTimeout(() => (this.toast.visible = false), 3000);
    },

    setSelectedTable(table) {
      if (table.status === "occupied" || table.status === "reserved") {
        this.showToast(`Table ${table.label} is not available.`, "error");
        return;
      }

      this.selectedTableId = table.id;
      this.form.guests = table.capacity;
      this.isSidebarOpen = true;
      this.hasSubmitted = false;
    },

    closeSidebar() {
      if (!this.hasSubmitted) {
        this.selectedTableId = null;
      }

      this.isSidebarOpen = false;
      this.hasSubmitted = false;
    },

    async submitReservation() {
      this.isSubmitting = true;

      await new Promise((resolve) => setTimeout(resolve, 1500));

      const table = this.tables.find((t) => t.id === this.selectedTableId);

      if (!table) {
        this.showToast("No table selected.", "error");
        this.isSubmitting = false;
        return;
      }

      table.status = "reserved";
      this.isSubmitting = false;
      this.isSidebarOpen = false;
      this.hasSubmitted = true;

      this.showToast("Table reserved successfully!", "success");
      this.showSuccessModal = true;
    },

    resetAll() {
      this.showSuccessModal = false;

      this.form.name = "";
      this.form.phone = "";
      this.form.note = "";
      this.form.guests = 2;
    },
  },
});
