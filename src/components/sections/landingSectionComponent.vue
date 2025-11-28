<script setup>
import { useRouter } from "vue-router";
import { ref, onMounted, onUnmounted } from "vue";

const router = useRouter();

const goToReservation = () => {
  router.push("/reservation");
};

const hideContent = ref(false);

function checkingScroll() {
  const firsScreenHeight = window.innerHeight * 0.2;
  const currentScroll = window.scrollY;

  hideContent.value = currentScroll > firsScreenHeight;
}

onMounted(() => {
  window.addEventListener("scroll", checkingScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", checkingScroll);
});
</script>

<template>
  <section class="landing-section">
    <div class="section-content centered" :class="{ hidden: hideContent }">
      <p class="wellcome-text">Wellcome</p>
      <p class="subtitle">Discover and experirnce fine selection of international tastes</p>
      <button type="button" class="call-to-action" @click="goToReservation">
        <span>Book a Table</span>
        <div class="btn-effect"></div>
      </button>
    </div>
  </section>
</template>

<style>
.landing-section {
  width: 100%;
  height: 100dvh;
  position: relative;
}
.section-content {
  width: 100%;
  height: 100dvh;
  flex-direction: column;
  gap: 16px;
  position: fixed;
}
.wellcome-text {
  font-size: clamp(42px, 8vw, 144px);
  font-family: "font-2", sans-serif;
  color: var(--light-color);
  font-weight: bold;
  letter-spacing: -1px;
}
.subtitle {
  font-size: clamp(13px, 3vw, 21px);
  color: var(--light-color);
}
.call-to-action {
  color: var(--light-color);
  border: 2px solid var(--light-color);
  border-radius: 18px;
  padding: 12px 28px;
  font-size: clamp(13px, 3vw, 21px);
  margin-top: 12px;
  cursor: pointer;
  transition: all 0.5s ease;
  overflow: hidden;
  position: relative;
}
.call-to-action:hover .btn-effect {
  top: 0;
}
.call-to-action:hover {
  color: #000;
}
.hidden {
  transition: all 1s ease;
  transform: translateY(-555px);
  opacity: 0;
}
</style>
