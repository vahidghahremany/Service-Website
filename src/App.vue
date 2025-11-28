<script setup>
import { RouterView } from "vue-router";
import { ref, onMounted, onUnmounted } from "vue";
import { useMenuStore } from "./stores/menu";
import headerComponent from "./components/layout/headerComponent.vue";
import cartModalComponent from "./components/modals/cartModalComponent.vue";
import headerMenuComponent from "./components/layout/headerMenuComponent.vue";
import notificationComponent from "./components/modals/notificationComponent.vue";

const menu = useMenuStore();
const isHidden = ref(false);

function checkScroll() {
  const firsScreenHeight = window.innerHeight * 0.7;
  const currentScroll = window.scrollY;

  isHidden.value = currentScroll > firsScreenHeight;
}

onMounted(() => {
  window.addEventListener("scroll", checkScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", checkScroll);
});
</script>

<template>
  <notificationComponent />
  <cartModalComponent />
  <header :class="{ hide: isHidden }">
    <headerComponent />
  </header>
  <main>
    <router-view></router-view>
  </main>

  <Teleport to="body">
    <transition name="fade-bg" @click.self="menu.closeMenu">
      <div v-if="menu.isOpen" class="menu-overlay" @click="menu.close"></div>
    </transition>

    <transition name="sheet">
      <headerMenuComponent v-if="menu.isOpen" />
    </transition>
  </Teleport>
</template>

<style>
.fade-bg-enter-from,
.fade-bg-leave-to {
  opacity: 0;
}

.fade-bg-enter-active,
.fade-bg-leave-active {
  transition: opacity 0.3s ease;
}

.fade-bg-enter-to,
.fade-bg-leave-from {
  opacity: 1;
}

.menu-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(4px);
  z-index: 999999;
}

.sheet-enter-from {
  transform: translateY(100%);
  opacity: 0.7;
}

.sheet-enter-active {
  transition: all 0.45s cubic-bezier(0.22, 1.25, 0.32, 1);
}

.sheet-enter-to {
  transform: translateY(0%);
  opacity: 1;
}

.sheet-leave-from {
  transform: translateY(0);
  opacity: 1;
}

.sheet-leave-active {
  transition: all 0.35s cubic-bezier(0.22, 1.25, 0.32, 1);
}

.sheet-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
</style>
