<script setup>
import { RouterLink } from "vue-router";
import { useCartStore } from "@/stores/cart";
import { useMenuStore } from "@/stores/menu";
import bagIcon from "../icons/bagIcon.vue";
import userIcon from "../icons/userIcon.vue";
import homeBoldIcon from "../icons/homeBoldIcon.vue";
import menuBoldIcon from "../icons/manuBoldIcon.vue";
import blogIcon from "../icons/blogIcon.vue";
import pinBoldIcon from "../icons/pinBoldIcon.vue";
import chatIcon from "../icons/chatIcon.vue";
import menuIcon from "../icons/menuIcon.vue";

const cart = useCartStore();
const menu = useMenuStore();

function handleCartClick() {
  cart.toggleCart();
}
</script>

<template>
  <div class="desktop-navbar">
    <div class="actions">
      <button type="button" class="action-btn">
        <userIcon />
        <div class="btn-effect"></div>
      </button>
      <button type="button" class="action-btn" @click="handleCartClick">
        <bagIcon />
        <div class="btn-effect"></div>
      </button>
    </div>
    <nav>
      <div class="link-group">
        <homeBoldIcon color="white" />
        <RouterLink to="/">Home</RouterLink>
      </div>
      <div class="link-group">
        <menuBoldIcon color="white" />
        <RouterLink to="/menu">Menu</RouterLink>
      </div>
      <div class="link-group">
        <pinBoldIcon color="white" />
        <RouterLink to="/reservation">Reservation</RouterLink>
      </div>
      <div class="link-group">
        <blogIcon />
        <RouterLink>Blog</RouterLink>
      </div>
      <div class="link-group">
        <chatIcon />
        <RouterLink>contact</RouterLink>
      </div>
    </nav>
    <div class="logo">
      <h2>LOGO</h2>
    </div>
  </div>
  <div class="mobile-navbar">
    <div class="actions">
      <button type="button" class="action-btn"><userIcon /></button>
      <button type="button" class="action-btn" @click="handleCartClick"><bagIcon /></button>
    </div>
    <div class="menu-icon">
      <button class="action-btn" @click="menu.toggleMenu">
        <menuIcon />
        <div class="btn-effect"></div>
      </button>
    </div>
  </div>
</template>

<style scoped>
.desktop-navbar {
  width: 100%;
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
  overflow: hidden;
  position: relative;
}
.action-btn:hover #svg {
  transition: all 0.5s ease;
  --svg-stroke-color: var(--primary-color);
  --svg-fill-color: var(--primary-color);
}
.action-btn:hover .btn-effect {
  top: 0;
}
.mobile-navbar {
  justify-content: space-between;
  align-items: center;
  display: none;
}
@keyframes moveUp {
  to {
    transform: translateY(-50px);
  }
}

@media (width < 768px) {
  .desktop-navbar {
    display: none;
  }
  .mobile-navbar {
    display: flex;
  }
}
</style>
