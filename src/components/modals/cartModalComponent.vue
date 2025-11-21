<script setup>
import { useCartStore } from "@/stores/cart";

const cart = useCartStore();

function handleBackdropClick(e) {
  if (e.target === e.currentTarget) {
    cart.closeCart();
  }
}
</script>

<template>
  <div v-if="cart.isOpen" class="modal-backdrop" @click="handleBackdropClick">
    <div class="modal">
      <div class="modal-header">
        <h2>Shopping Cart</h2>
        <button class="close-btn" @click="cart.closeCart">×</button>
      </div>
      <div class="cart-items">
        <div class="cart-item" v-for="item in cart.cartItem" :key="item.id">
          <div class="cart-img">
            <img :src="item.image" alt="pizza img" />
          </div>
          <div>
            <h4>{{ item.title || item.name }}</h4>
            <p>$ {{ item.price + "000" }}</p>
            <p>quantity: {{ item.quantity }}</p>
          </div>
          <button class="remove-btn" @click="cart.removeItem(item.id)">Delete</button>
        </div>
        <p v-if="cart.cartItem.length === 0" class="empty-cart">Shopping Cart Is Empty.</p>
      </div>
      <footer class="modal-footer">
        <h3>Total Payment: $ {{ cart.totalPrice + "000" }}</h3>
        <button class="checkout-btn">Finish</button>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
}
.modal {
  width: 400px;
  max-height: 80vh;
  background: var(--light-color);
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.modal-header {
  width: 400px;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  background: var(--primary-color);
  color: white;
}
.close-btn {
  background: transparent;
  border: none;
  color: white;
  font-size: 22px;
  cursor: pointer;
}
.cart-items {
  padding: 16px;
  overflow-y: auto;
  flex-grow: 1;
}
.cart-item {
  padding: 12px;
  margin-bottom: 10px;
  background: #f5f5f5;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.cart-img img {
  width: 150px;
  height: 150px;
}
.remove-btn {
  background: var(--secondary-color);
  border: none;
  color: var(--light-color);
  padding: 6px 10px;
  border-radius: 8px;
  cursor: pointer;
}

.empty-cart {
  text-align: center;
  margin-top: 20px;
  color: #777;
}

.modal-footer {
  padding: 16px;
  border-top: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.checkout-btn {
  background: #4caf50;
  border: none;
  padding: 10px 16px;
  color: white;
  border-radius: 10px;
  cursor: pointer;
}
</style>
