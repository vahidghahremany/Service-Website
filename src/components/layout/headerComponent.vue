<script setup>
import { RouterLink } from "vue-router";
import bagIcon from "../icons/bagIcon.vue";
import userIcon from "../icons/userIcon.vue";
</script>

<template>
  <div class="desktop-navbar">
    <div class="actions">
      <button type="button" class="action-btn"><userIcon /></button>
      <button type="button" class="action-btn"><bagIcon /></button>
    </div>
    <nav>
      <RouterLink>Home</RouterLink>
      <RouterLink>Menu</RouterLink>
      <RouterLink>Reservation</RouterLink>
      <RouterLink>Blog</RouterLink>
      <RouterLink>contact</RouterLink>
    </nav>
    <div class="logo">
      <h2>LOGO</h2>
    </div>
  </div>
</template>

<style scoped>
.desktop-navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 21px;
}
.actions {
  display: flex;
  gap: 8px;
}
.action-btn {
  padding: 8px 10px;
  border-radius: 12px;
  border: 2px solid var(--light-color);
  cursor: pointer;
}

@media (width < 768px) {
  .desktop-navbar {
    display: none;
  }
}
</style>
