<script setup>
import { useMenuStore } from "@/stores/menu";
import homeBoldIcon from "../icons/homeBoldIcon.vue";
import menuBoldIcon from "../icons/manuBoldIcon.vue";
import blogBoldIcon from "../icons/blogBoldIcon.vue";
import pinBoldIcon from "../icons/pinBoldIcon.vue";
import chatBoldIcon from "../icons/chatBoldIcon.vue";

const menu = useMenuStore();
</script>

<template>
  <div class="sheet-panel">
    <div class="drag-line" @click="menu.closeMenu"></div>

    <nav class="menu-links">
      <div class="link-group">
        <homeBoldIcon color="black" />
        <RouterLink to="/" @click="menu.closeMenu">Home</RouterLink>
      </div>
      <div class="link-group">
        <menuBoldIcon color="black" />
        <RouterLink to="/menu" @click="menu.closeMenu">Menu</RouterLink>
      </div>
      <div class="link-group">
        <pinBoldIcon color="black" />
        <RouterLink to="/reservation" @click="menu.closeMenu">Reservation</RouterLink>
      </div>
      <div class="link-group">
        <blogBoldIcon />
        <RouterLink to="/" @click="menu.closeMenu">Blog</RouterLink>
      </div>
      <div class="link-group">
        <chatBoldIcon />
        <RouterLink to="/" @click="menu.closeMenu">Contact</RouterLink>
      </div>
    </nav>
  </div>
</template>

<style scoped>
.sheet-panel {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fff;
  border-radius: 22px 22px 0 0;
  padding: 24px 32px;
  box-shadow: 0 -10px 40px rgba(0, 0, 0, 0.15);
  z-index: 1000000;
  max-height: 75vh;
  overflow-y: auto;
}
.drag-line {
  width: 45px;
  height: 6px;
  background: #ddd;
  margin: 0 auto 18px;
  border-radius: 3px;
}
.menu-links {
  display: flex;
  flex-direction: column;
  gap: 22px;
  font-size: 18px;
}
.menu-links a {
  color: #111;
  text-decoration: none;
  font-weight: 600;
  transition: transform 0.2s ease, opacity 0.2s ease;
}
.menu-links a:active {
  transform: scale(0.96);
  opacity: 0.7;
}
</style>
