<script setup>
import menuSectionComponent from "@/components/sections/menuSectionComponent.vue";
</script>

<template>
  <div class="menu-page">
    <menuSectionComponent />
  </div>
</template>

<style>
.menu-page {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--primary-color);
}
</style>
