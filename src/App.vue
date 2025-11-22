<script setup>
import { RouterView } from "vue-router";
import { ref, onMounted, onUnmounted } from "vue";
import headerComponent from "./components/layout/headerComponent.vue";

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
  <header :class="{ hide: isHidden }">
    <headerComponent />
  </header>
  <main>
    <router-view></router-view>
  </main>
  <footer></footer>
</template>

<style scoped></style>
