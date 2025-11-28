<script setup>
import { useCartStore } from "@/stores/cart";
import { useRouter } from "vue-router";
import bagAddIcon from "../icons/bagAddIcon.vue";
import starIcon from "../icons/starIcon.vue";

const props = defineProps({
  variant: {
    type: String,
    default: "white",
  },
  item: {
    type: Object,
    required: true,
  },
});

const cart = useCartStore();
const router = useRouter();

function handleAddToCart() {
  cart.addToCart(props.item, 1);
  cart.showNotification(`${props.item.name} added to cart`, "success");
}

const goToProductPage = () => {
  router.push(`/product-page/${props.item.id}`);
};
</script>

<template>
  <div class="card" :class="variant" @click="goToProductPage">
    <div class="card-header">
      <h3 @click="goToProductPage">{{ props.item.name }}</h3>
    </div>
    <div class="card-img">
      <img :src="props.item.image" alt="props.item.name" />
    </div>
    <div class="card-body">
      <div class="card-content">
        <div class="score">
          <starIcon />
          <h5>{{ props.item.score }}</h5>
        </div>
        <h3 class="price">{{ "$" + props.item.price + ".000" }}</h3>
      </div>
      <div class="card-btn">
        <button type="button" @click.stop="handleAddToCart"><bagAddIcon /></button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 200px;
  height: 310px;
  border-radius: 34px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  padding: 20px 0 0;
  overflow: hidden;
  font-family: "font-2", sans-serif;
  cursor: pointer;
  z-index: 999;
}
.card.black {
  color: var(--light-color);
  background-color: var(--primary-color);
}
.card.white {
  color: var(--primary-color);
  background-color: var(--light-color);
}
.card-header {
  pointer-events: none;
}
.card .card-img {
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.card .card-img img {
  width: 150px;
  height: 150px;
  transition: all 0.5s ease;
}
.card :hover img {
  scale: 1.1;
}
.card .card-body {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.card .card-body .card-content {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 8px;
  padding: 0 0px 16px 24px;
}
.score {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 4px;
  color: rgb(255, 219, 47);
}
.score svg {
  fill: rgb(255, 219, 47);
}
.score h5 {
  font-size: 14px;
}
.price {
  font-size: 17px;
}
.card-btn button {
  width: 68px;
  height: 68px;
  background-color: var(--secondary-color);
  display: flex;
  justify-content: center;
  padding-top: 18px;
  transition: all 0.5s ease;
  cursor: pointer;
  border-top-left-radius: 16px;
  transform: translateY(2px);
  overflow: hidden;
}
.card-btn button svg {
  scale: 1.3;
}
.card-btn button:hover svg {
  animation: moveUp 0.5s ease-in-out;
}

@keyframes moveUp {
  to {
    transform: translateY(-50px);
  }
}

@media (width <= 768px) {
  .card {
    width: 250px;
  }
}
</style>
