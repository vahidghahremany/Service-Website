<script setup>
import { RouterLink } from "vue-router";
import { useCartStore } from "@/stores/cart";
import bagIcon from "../icons/bagIcon.vue";
import userIcon from "../icons/userIcon.vue";
import homeBoldIcon from "../icons/homeBoldIcon.vue";
import menuBoldIcon from "../icons/manuBoldIcon.vue";
import blogBoldIcon from "../icons/blogBoldIcon.vue";
import pinBoldIcon from "../icons/pinBoldIcon.vue";
import chatBoldIcon from "../icons/chatBoldIcon.vue";

const cart = useCartStore();

function handleCartClick() {
  cart.toggleCart();
}
</script>

<template>
  <div class="desktop-navbar">
    <div class="actions">
      <button type="button" class="action-btn"><userIcon /></button>
      <button type="button" class="action-btn" @click="handleCartClick"><bagIcon /></button>
    </div>
    <nav>
      <div class="link-group">
        <homeBoldIcon />
        <RouterLink>Home</RouterLink>
      </div>
      <div class="link-group">
        <menuBoldIcon />
        <RouterLink>Menu</RouterLink>
      </div>
      <div class="link-group">
        <pinBoldIcon />
        <RouterLink>Reservation</RouterLink>
      </div>
      <div class="link-group">
        <blogBoldIcon />
        <RouterLink>Blog</RouterLink>
      </div>
      <div class="lonk-group">
        <chatBoldIcon />
        <RouterLink>contact</RouterLink>
      </div>
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
  border-radius: 16px;
  border: 2px solid var(--light-color);
  cursor: pointer;
}
.link-group {
  display: flex;
  align-items: center;
  gap: 4px;
}

@media (width < 768px) {
  .desktop-navbar {
    display: none;
  }
}
</style>
