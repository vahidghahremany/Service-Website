<script setup>
import { useReservationStore } from "@/stores/reservation";
import tableMap from "@/components/ui/tableMap.vue";
import reservationSidbar from "@/components/ui/reservationSidebar.vue";
import checkIcon from "@/components/icons/checkIcon.vue";

const store = useReservationStore();
</script>

<template>
  <div class="page-container">
    <div class="plan-area">
      <div class="plan-area-bg-pattern"></div>

      <div class="plan-area-header">
        <h1>The Red Pepper Pizzeria</h1>
        <p>Smart Reservation System | Downtown Branch</p>
      </div>

      <div class="information">
        <div class="information-item">
          <div class="information-dot dot-available"></div>
          <span>Available / Bookable</span>
        </div>
        <div class="information-item">
          <div class="information-dot dot-occupied"></div>
          <span>Reserved / Occupied</span>
        </div>
        <div class="information-item">
          <div class="information-dot dot-selected"></div>
          <span>Your Selection</span>
        </div>
      </div>

      <tableMap />
    </div>

    <reservationSidbar />

    <transition name="fade">
      <div v-if="store.toast.visible" class="toast">
        <i
          class="fa-solid"
          :class="{
            'fa-circle-check text-success': store.toast.type === 'success',
            'fa-circle-exclamation text-error': store.toast.type === 'error',
          }"
        ></i>
        <span>{{ store.toast.message }}</span>
      </div>
    </transition>

    <transition name="fade">
      <div v-if="store.showSuccessModal" class="modal-overlay">
        <div class="modal-content">
          <div class="modal-icon">
            <checkIcon />
          </div>
          <h3>Reservation Confirmed!</h3>
          <p>
            Table {{ store.getSelectedTable?.label }} is reserved for you. A confirmation SMS has
            been sent.
          </p>
          <button @click="store.resetAll" class="modal-close-btn">Back to Map</button>
        </div>
      </div>
    </transition>
  </div>
</template>

<style>
.page-container {
  font-family: var(--en-font);
  color: var(--light-color);
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

/* Scrollbar and Layout Styles */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: var(--color-surface);
}
::-webkit-scrollbar-thumb {
  background: #4b5563;
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: var(--secondary-color);
}

.plan-area {
  position: relative;
  flex-grow: 1;
  background-color: var(--primary-color);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}
.plan-area-bg-pattern {
  position: absolute;
  inset: 0;
  opacity: 0.1;
  background-image: radial-gradient(#3d3d3d 1px, transparent 1px);
  background-size: 30px 30px;
}
.plan-area-header {
  position: absolute;
  top: 6rem;
  left: 2rem;
  right: auto;
  z-index: 10;
  text-align: left;
}
.plan-area-header h1 {
  font-size: 1.875rem;
  font-weight: 700;
  color: var(--secondary-color);
  letter-spacing: -0.05em;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.plan-area-header p {
  color: var(--color-text-muted);
  font-size: 0.875rem;
  margin-top: 0.25rem;
}
.information {
  position: absolute;
  bottom: var(--padding-base);
  right: var(--padding-base);
  left: auto;
  z-index: 10;
  background-color: rgba(39, 39, 42, 0.8);
  backdrop-filter: blur(4px);
  padding: 1rem;
  border-radius: 0.75rem;
  border: 1px solid #3f3f46;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
  font-size: 0.875rem;
}
.information-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}
.information-dot {
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
}
.dot-available {
  background-color: var(--color-available);
  box-shadow: 0 0 5px var(--color-available);
}
.dot-occupied {
  background-color: var(--color-occupied);
}
.dot-selected {
  background-color: var(--secondary-color);
  box-shadow: 0 0 8px var(--secondary-color);
}
.toast {
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--color-surface-light);
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.875rem;
}
.text-success {
  color: var(--color-available);
}
.text-error {
  color: var(--color-occupied);
}
.modal-overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5px);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal-content {
  background-color: var(--color-surface);
  padding: 2rem;
  border-radius: 1rem;
  text-align: center;
  max-width: 400px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
}
.modal-icon {
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: var(--color-text-muted);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
}
.modal-content h3 {
  margin-top: 0;
  color: var(--light-color);
}
.modal-content p {
  color: var(--light-color);
  margin-bottom: 1.5rem;
}
.modal-close-btn {
  padding: 0.75rem 1.5rem;
  background-color: #3f3f46;
  color: var(--color-text-light);
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.2s;
}
.modal-close-btn:hover {
  background-color: #52525b;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
