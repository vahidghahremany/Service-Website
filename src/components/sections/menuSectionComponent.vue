<script setup>
import { menuItems } from "@/data/menuItems";

const leftSide = menuItems.pizza.slice(0, Math.ceil(menuItems.pizza.length / 2));
const rightSide = menuItems.pizza.slice(Math.ceil(menuItems.pizza.length / 2));
</script>

<template>
  <div class="menu-container">
    <div class="title-group">
      <h4>MENU ITEMS</h4>
      <p class="flip">
        <span class="deg1"></span><span class="deg2"></span><span class="deg3"></span>
      </p>
    </div>
    <div class="menu-group">
      <div class="menu-col menu-col-one">
        <div class="item-group" v-for="item in leftSide" :key="item.id">
          <div class="first-col-group">
            <div class="item-img">
              <img :src="item.image" alt="pizza item" />
            </div>
            <div class="item-content">
              <h3>{{ item.name }}</h3>
              <p>{{ item.description }}</p>
            </div>
          </div>
          <div class="item-price">
            <h4>{{ item.price + ".000" }}</h4>
          </div>
        </div>
      </div>
      <div class="menu-col menu-col-two">
        <div class="item-group" v-for="item in rightSide" :key="item.id">
          <div class="first-col-group">
            <div class="item-img">
              <img :src="item.image" alt="pizza item" />
            </div>
            <div class="item-content">
              <h3>{{ item.name }}</h3>
              <p>{{ item.description }}</p>
            </div>
          </div>
          <div class="item-price">
            <h4>{{ item.price + ".000" }}</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.menu-container {
  width: 100%;
  background-color: var(--primary-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  padding: 2rem 0;
  color: var(--light-color);
}
.menu-group {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3rem;
}
.menu-col {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.item-group {
  width: 500px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.first-col-group {
  display: flex;
  gap: 8px;
  align-items: center;
}
.item-img {
  width: 100px;
  height: 100px;
}
.item-img img {
  width: 100%;
  height: 100%;
}
.item-content {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 4px;
}
.item-content p {
  font-size: 14px;
}
.item-price {
  font-size: 18px;
}

@media (width <=568px) {
  .item-group {
    width: 350px;
  }
  .item-img {
    width: 75px;
    height: 75px;
  }
  .item-content h3 {
    font-size: 14px;
  }
  .item-content p {
    font-size: 12px;
  }
  .item-price {
    font-size: 14px;
  }
  .menu-group {
    gap: 1rem;
  }
}
</style>
