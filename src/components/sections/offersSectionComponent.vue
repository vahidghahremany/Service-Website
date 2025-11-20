<script setup>
import { ref, computed } from "vue";
import { menuItems } from "@/data/menuItems";
import { descountedIds } from "@/data/offersItem";
import offersCardComponent from "../cards/offersCardComponent.vue";

const discountedItems = computed(() => {
  return Object.values(menuItems).flatMap((category) =>
    category.filter((item) => descountedIds.includes(item.id))
  );
});

const visibleItems = computed(() => discountedItems.value.slice(0, 6));

const offersModal = ref(false);
</script>

<template>
  <section class="offers-section">
    <div class="sec-header">
      <h3>OFFERS</h3>
    </div>
    <div class="sec-body">
      <offersCardComponent v-for="offers in visibleItems" :key="offers.id" :offers="offers" />
    </div>
  </section>
</template>

<style scoped>
.offers-section {
  width: 100%;
  padding: 2rem 1rem 4rem;
  background-color: var(--light-color);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  box-sizing: border-box;
}

.sec-header {
  width: 100%;
  background-color: var(--secondary-color);
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
}

.sec-header h3 {
  color: var(--light-color);
  font-family: "font-2", sans-serif;
  font-size: clamp(20px, 4vw, 34px);
  text-align: center;
}

.sec-body {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
