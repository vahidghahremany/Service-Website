<script setup>
import { useCartStore } from "@/stores/cart";
import BagCheckIcon from "../icons/bagCheckIcon.vue";

const cart = useCartStore();
</script>

<template>
  <div
    class="notif-container"
    :class="{
      show: cart.notificationState.isVisible,
      hide: !cart.notificationState.isVisible,
    }"
  >
    <div class="notif-content">
      <BagCheckIcon />
      <h3>{{ cart.notificationState.message }}</h3>
    </div>

    <div class="progress-bar">
      <div class="progress-fill" :class="{ active: cart.notificationState.isVisible }"></div>
    </div>
  </div>
</template>

<style scoped>
.notif-container {
  width: 300px;
  background-color: var(--light-color);
  border-radius: 21px;
  position: fixed;
  top: 21px;
  right: 21px;
  z-index: 99999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px 0 0;
  transition: all 0.5s ease;
  overflow: hidden;
}
.notif-container.hide {
  top: -200px;
}
.notif-container.show {
  top: 21px;
}
.notif-content {
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
}
.notif-content h3 {
  font-family: "font-2", sans-serif;
}
.notif-content svg {
  width: 34px;
  height: 34px;
}
.progress-bar {
  width: 100%;
  height: 6px;
  background: #e4e4e4;
  border-radius: 0 0 8px 8px;
  margin-top: 12px;
  overflow: hidden;
}
.progress-fill {
  width: 0%;
  height: 100%;
  background: var(--secondary-color);
  transition: width 3s linear;
}
.progress-fill.active {
  width: 100%;
}
</style>
