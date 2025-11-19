<script setup>
import { RouterView } from "vue-router";
import headerComponent from "./components/layout/headerComponent.vue";
</script>

<template>
  <header>
    <headerComponent />
  </header>
  <main>
    <router-view></router-view>
  </main>
  <footer></footer>
</template>

<style scoped></style>
