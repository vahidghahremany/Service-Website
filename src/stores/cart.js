import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useCartStore = defineStore("cart", () => {
  const isOpen = ref(false);
  const cartItem = ref([]);

  const itemCount = computed(() => cartItem.value.reduce((acc, cur) => acc + cur.quantity, 0));

  const totalPrice = computed(() =>
    cartItem.value.reduce((acc, cur) => acc + cur.price * cur.quantity, 0)
  );

  function toggleCart() {
    isOpen.value = !isOpen.value;
  }

  function openCart() {
    isOpen.value = true;
  }

  function closeCart() {
    isOpen.value = false;
  }

  function addToCart(product, qty = 1) {
    const existing = cartItem.value.find((i) => i.id === product.id);
    if (existing) {
      existing.quantity += qty;
    } else {
      cartItem.value.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: qty,
      });
    }
  }

  function removeItem(productId) {
    cartItem.value = cartItem.value.filter((i) => i.id !== productId);
  }

  function setQuantity(productId, qty) {
    const it = cartItem.value.find((i) => i.id === productId);
    if (!it) return;
    it.quantity = Math.max(0, Math.floor(qty));
    if (it.quantity === 0) removeItem(productId);
  }

  function clearCart() {
    cartItem.value = [];
  }

  return {
    isOpen,
    cartItem,
    itemCount,
    totalPrice,
    toggleCart,
    openCart,
    closeCart,
    addToCart,
    removeItem,
    setQuantity,
    clearCart,
  };
});
