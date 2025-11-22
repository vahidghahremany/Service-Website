<script setup>
import { useCartStore } from "@/stores/cart";

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
    <h3>{{ cart.notificationState.message }}</h3>
  </div>
</template>

<style scoped>
.notif-container {
  width: 300px;
  height: 89px;
  background-color: var(--light-color);
  border-radius: 16px;
  position: fixed;
  top: 21px;
  right: 21px;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease;
}
.notif-container.hide {
  top: -200px;
}
.notif-container.show {
  top: 21px;
}
</style>
