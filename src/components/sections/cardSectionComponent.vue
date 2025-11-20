<script setup>
import { menuItems } from "@/data/menuItems";
import cardComponent from "../cards/cardComponent.vue";
</script>

<template>
  <section class="card-section">
    <cardComponent v-for="pizza in menuItems.pizza" :key="pizza.id" :item="pizza" />
  </section>
</template>

<style scoped>
.card-section {
  width: 100%;
  background-color: var(--light-color);
  border-radius: 55px 55px 0 0;
  margin-top: -10rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2rem;
  gap: 16px;
}
</style>
