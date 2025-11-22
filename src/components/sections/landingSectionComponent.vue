<script setup></script>

<template>
  <section class="landing-section">
    <div class="section-content centered">
      <p class="wellcome-text">Wellcome</p>
      <p class="subtitle">Discover and experirnce fine selection of international tastes</p>
      <button type="button" class="call-to-action">
        <span>Book a Table</span>
        <div class="effect"></div>
      </button>
    </div>
  </section>
</template>

<style>
.landing-section {
  width: 100%;
  height: 100dvh;
  position: relative;
  z-index: -5;
}
.section-content {
  width: 100%;
  height: 100dvh;
  flex-direction: column;
  gap: 16px;
  position: fixed;
  z-index: -3;
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
.effect {
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: #fff;
  top: 100%;
  left: 0;
  transition: all 0.5s ease;
  z-index: -4;
}
.call-to-action:hover .effect {
  inset: 0;
}
.call-to-action:hover {
  color: #000;
}
</style>
