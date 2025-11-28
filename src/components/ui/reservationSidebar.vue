<script setup>
import { useReservationStore } from "@/stores/reservation";
import closeIcon from "../icons/closeIcon.vue";
import listIcon from "../icons/listIcon.vue";

const store = useReservationStore();
</script>

<template>
  <Teleport to="body">
    <transition name="fade-bg">
      <div v-if="store.isSidebarOpen" class="overlay-bg"></div>
    </transition>
    <transition name="slide">
      <div v-if="store.isSidebarOpen" class="sidebar">
        <div class="sidebar-header">
          <div>
            <h2>Complete Reservation</h2>
            <p class="selected-table-info">
              <i class="fa-solid fa-check-circle" style="margin-right: 0.25rem"></i>
              {{ store.getSelectedTable?.label }} Selected
            </p>
          </div>
          <button @click="store.closeSidebar" class="close-btn">
            <closeIcon />
          </button>
        </div>

        <div class="sidebar-content">
          <div class="info-card">
            <div class="info-card-details">
              <div class="info-card-icon">
                <listIcon />
              </div>
              <div>
                <div class="info-card-title">Table Capacity</div>
                <div class="info-card-subtitle">
                  {{ store.getSelectedTable?.capacity }} guests standard
                </div>
              </div>
            </div>
            <div class="info-card-id">#{{ store.getSelectedTable?.id }}</div>
          </div>

          <form @submit.prevent="store.submitReservation" class="reservation-form">
            <div class="form-group">
              <label>Full Name</label>
              <div class="input-wrapper">
                <input
                  v-model="store.form.name"
                  required
                  type="text"
                  class="form-input"
                  placeholder="example: Vahid Ghahremani"
                />
              </div>
            </div>

            <div class="form-group">
              <label>Phone Number</label>
              <div class="input-wrapper">
                <input
                  v-model="store.form.phone"
                  required
                  type="tel"
                  class="form-input"
                  placeholder="9371234567"
                />
              </div>
            </div>

            <div class="grid-2">
              <div class="form-group">
                <label>Date</label>
                <input v-model="store.form.date" required type="date" class="form-input" />
              </div>
              <div class="form-group">
                <label>Time</label>
                <select v-model="store.form.time" required class="form-select">
                  <option value="" disabled>Select...</option>
                  <option>07:00 PM</option>
                  <option>07:30 PM</option>
                  <option>08:00 PM</option>
                  <option>08:30 PM</option>
                  <option>09:00 PM</option>
                  <option>09:30 PM</option>
                </select>
              </div>
            </div>

            <div class="slider-group">
              <div class="slider-group-header">
                <span style="color: var(--color-text-muted)">Number of Guests</span>
                <span class="value">{{ store.form.guests }} people</span>
              </div>
              <input
                type="range"
                v-model="store.form.guests"
                min="1"
                :max="store.getSelectedTable?.capacity + 1"
                class="slider-range"
              />
              <div class="slider-range-labels">
                <span>1 guest</span>
                <span>{{ store.getSelectedTable?.capacity + 1 }} max</span>
              </div>
            </div>

            <div class="form-group">
              <label>Notes (Optional)</label>
              <textarea
                v-model="store.form.note"
                rows="3"
                class="form-textarea"
                placeholder="Birthday, high chair needed, etc."
              ></textarea>
            </div>

            <button type="submit" :disabled="store.isSubmitting" class="submit-btn">
              <span v-if="!store.isSubmitting">Confirm and Pay Deposit</span>
              <span v-else>Processing</span>
            </button>
          </form>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<style scoped>
.overlay-bg {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(4px);
  z-index: 99;
}
.sidebar {
  position: fixed !important;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 1001;
  width: 100%;
  max-width: 450px;
  background-color: var(--color-surface);
  border-left: 1px solid #3f3f46;
  display: flex;
  flex-direction: column;
  border-radius: 42px 0 0 34px;
}
.sidebar-header {
  padding: var(--padding-base);
  border-bottom: 1px solid #3f3f46;
  background-color: var(--secondary-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  border-radius: 34px 0 0 0;
  color: var(--light-color);
}
.selected-table-info {
  color: var(--color-primary);
}
.close-btn {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  color: var(--color-text-muted);
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;
}
.close-btn:hover {
  scale: 1.1;
}
.sidebar-content {
  flex: 1;
  overflow-y: auto;
  padding: var(--padding-base);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.info-card {
  background-color: rgba(39, 39, 42, 0.5);
  border-radius: 0.75rem;
  padding: 1rem;
  border: 1px solid #3f3f46;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.info-card-details {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.info-card-icon {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: #363636;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary);
}
.info-card-title {
  color: var(--color-text-light);
  font-weight: 500;
}
.info-card-subtitle {
  color: var(--color-text-muted);
  font-size: 0.875rem;
}
.info-card-id {
  font-size: 1.5rem;
  font-weight: 700;
  color: #71717a;
}
.reservation-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}
.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.form-group label {
  font-size: 0.875rem;
  color: var(--color-text-muted);
}
.input-wrapper {
  position: relative;
}
.form-icon-left {
  position: absolute;
  left: 1rem;
  right: auto;
  top: 0.875rem;
  color: #6b7280;
}
.form-input,
.form-select,
.form-textarea {
  width: 100%;
  background-color: var(--color-surface-light);
  border: 1px solid #3f3f46;
  border-radius: 0.5rem;
  padding: 0.75rem 1rem;
  color: var(--color-text-light);
  transition: border-color 0.2s, box-shadow 0.2s;
  outline: none;
}
.form-input::placeholder,
.form-select::placeholder,
.form-textarea::placeholder,
input[type="date"]::placeholder {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
    Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.form-input:focus,
.form-select:focus,
.form-textarea:focus {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 1px var(--color-primary);
}
.grid-2 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}
.slider-group {
  padding-top: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.slider-group-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--light-color);
}
.slider-range {
  width: 100%;
  height: 0.5rem;
  background-color: #3f3f46;
  border-radius: 0.5rem;
  -webkit-appearance: none;
  appearance: none;
  cursor: pointer;
}
.slider-range::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  background: var(--secondary-color);
  cursor: pointer;
  box-shadow: 0 0 5px rgba(255, 69, 0, 0.5);
  transition: background 0.2s;
}
.slider-range-labels {
  display: flex;
  justify-content: space-between;
  font-size: 0.75rem;
  color: var(--color-text-muted);
}
.submit-btn {
  width: 100%;
  background-color: var(--secondary-color);
  color: var(--color-text-light);
  font-weight: 700;
  padding: 1rem 1.5rem;
  border-radius: 0.75rem;
  transition: all 0.2s;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1.5rem;
}
.submit-btn:hover {
  background-image: linear-gradient(to right, var(--color-primary), #ff6347);
}
.submit-btn:active {
  transform: scale(0.95);
}
.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: scale(1);
}
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.4s ease, opacity 0.4s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

@media (min-width: 768px) {
  .sidebar {
    width: 450px;
    height: 100%;
    box-shadow: none;
  }
  .slide-enter-from,
  .slide-leave-to {
    transform: translateX(100%);
    opacity: 0;
  }
}

@media (max-width: 767px) {
  .sidebar {
    max-width: 100%;
    top: auto;
    right: 0;
    bottom: 0;
    left: 0;
    height: 90%;
    border-radius: 34px;
  }
  .sidebar-header {
    border-radius: 34px 34px 0 0;
  }
  .slide-enter-from,
  .slide-leave-to {
    transform: translateY(100%);
    opacity: 0;
  }
}
</style>
