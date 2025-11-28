<script setup>
import { useRoute } from "vue-router";
import { menuItems } from "@/data/menuItems";
import { useCartStore } from "@/stores/cart";

const route = useRoute();
const cart = useCartStore();

const productId = route.params.id;

const product = Object.values(menuItems)
  .flat()
  .find((item) => item.id === productId);

const handleAdding = () => {
  cart.addToCart(product, 1);
  cart.showNotification(`${product.name} added to cart`, "success");
};
</script>

<template>
  <div class="product-page">
    <div class="page-content">
      <h1>{{ product.name }}</h1>
      <p>{{ product.description }}</p>
      <button type="button" @click="handleAdding">ADD TO CART</button>
    </div>
    <div class="page-price">
      <h3>{{ product.price + ".000" }}</h3>
    </div>
    <div class="product-img">
      <img :src="product.image" alt="product img" />
    </div>
  </div>
</template>

<style scoped>
.product-page {
  width: 100vw;
  height: 100dvh;
  background-color: var(--primary-color);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--light-color);
  overflow: hidden;
  font-family: "font-2";
}
.product-img {
  width: 800px;
  height: 800px;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translateX(-50%);
}
.product-img img {
  width: 100%;
  height: 100%;
}
.page-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
}
.product-page h1 {
  font-size: 55px;
}
.page-price {
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: start;
  margin-top: 5rem;
}
.page-price h3 {
  font-size: 55px;
}
.page-content button {
  padding: 1rem 4rem;
  background-color: var(--secondary-color);
  border-radius: 12px;
  color: var(--light-color);
  margin-top: 2rem;
  transition: all 0.5s ease;
}
.page-content button:hover {
  padding: 1rem 6rem;
}
</style>
