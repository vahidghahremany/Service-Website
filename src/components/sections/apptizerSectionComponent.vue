<script setup>
import { menuItems } from "@/data/menuItems";
import cardComponent from "../cards/cardComponent.vue";

const offersItem = menuItems.appetizers.slice(0, 7);
</script>

<template>
  <div class="apptizer-section">
    <div class="title-group">
      <h4>APPTIZER</h4>
      <p class="flip">
        <span class="deg1"></span><span class="deg2"></span><span class="deg3"></span>
      </p>
    </div>
    <div class="cards-row">
      <card-component
        variant="white"
        v-for="apptizer in offersItem"
        :key="apptizer.id"
        :item="apptizer"
      />
    </div>
  </div>
</template>

<style>
.apptizer-section {
  width: 100%;
  background-color: var(--primary-color);
  border-radius: 55px 55px 0 0;
  margin-top: -54px;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
}
.title-group {
  text-align: center;
  position: relative;
}
.title-group h4 {
  font-size: 34px;
  color: var(--light-color);
}
.cards-row {
  display: flex;
  gap: 1.6rem;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2rem;
}

@media (width <=568px) {
  .cards-row {
    justify-content: center;
  }
}
</style>
