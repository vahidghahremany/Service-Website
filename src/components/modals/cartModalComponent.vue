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
  <transition name="fade">
    <div v-if="cart.isOpen" class="modal-container centered" @click="handleBackdropClick">
      <transition name="slide">
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
              <div class="cart-body">
                <h4>{{ item.title || item.name }}</h4>
                <h5>$ {{ item.price + "000" }}</h5>
                <div class="quantity-box">
                  <button @click="cart.decreaseQuantity(item.id)" class="qty-btn">−</button>
                  <span class="qty-number">{{ item.quantity }}</span>
                  <button @click="cart.increaseQuantity(item.id)" class="qty-btn">+</button>
                </div>
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
      </transition>
    </div>
  </transition>
</template>

<style scoped>
.modal-container {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(4px);
  z-index: 9999;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateY(-100px);
  opacity: 0;
}
.slide-enter-to,
.slide-leave-from {
  transform: translateY(0);
  opacity: 1;
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}
.modal {
  width: 400px;
  min-height: 500px;
  max-height: 80vh;
  background: var(--primary-color);
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.modal-header {
  width: 400px;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--secondary-color);
  color: var(--light-color);
}
.close-btn {
  background: transparent;
  border: none;
  color: var(--light-color);
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
  width: 100px;
  height: 100px;
}
.cart-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
.cart-body h5 {
  font-size: 16px;
}
.quantity-box {
  display: flex;
  align-items: center;
  gap: 10px;
  background: var(--light-color);
  border-radius: 12px;
  padding: 6px 12px;
  border: 1px solid #ddd;
}
.qty-btn {
  width: 32px;
  height: 32px;
  border: none;
  outline: none;
  background: var(--primary-color);
  color: var(--light-color);
  font-size: 20px;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.15s ease, background 0.2s ease;
}
.qty-btn:active {
  transform: scale(0.9);
}
.qty-number {
  font-size: 18px;
  font-weight: 600;
  width: 24px;
  text-align: center;
  color: #333;
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
  background: var(--primary-color);
  border: none;
  padding: 10px 16px;
  color: var(--light-color);
  border-radius: 10px;
  cursor: pointer;
}
.modal-footer h3 {
  color: var(--light-color);
}
.modal-footer button {
  background-color: var(--secondary-color);
  color: var(--light-color);
  font-weight: bold;
}
</style>
