<script setup>
const props = defineProps({
  offers: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="offer-card">
    <div class="card-img">
      <img :src="props.offers.image" :alt="props.offers.name" />
    </div>
    <div class="card-body">
      <h4>{{ props.offers.name }}</h4>
      <h5>{{ "$" + props.offers.price.toFixed(0) + ".000" }}</h5>
      <div class="off-badge">
        <h6>20%</h6>
      </div>
    </div>
  </div>
</template>

<style scoped>
.offer-card {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  cursor: pointer;
}
.card-img {
  max-width: 250px;
  max-height: 250px;
  z-index: 9;
}
.card-img img {
  width: 100%;
  height: 100%;
}
.card-body {
  height: 150px;
  width: 250px;
  border-radius: 0 70px 70px 0;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: var(--light-color);
  transform: translateX(-38px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.5s ease;
  position: relative;
}
.offer-card:hover .card-body {
  box-shadow: rgba(0, 0, 0, 0.28) 0px 8px 16px;
}
.card-body h4 {
  font-size: 21px;
  font-weight: 600;
  text-align: center;
  color: var(--primary-color);
}
.card-body h5 {
  font-size: 18px;
  font-weight: 700;
  color: var(--secondary-color);
}
.card-body .off-badge {
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  border-radius: 50%;
  background-color: var(--secondary-color);
  transform: translate(150%, -100%);
}
.card-body .off-badge h6 {
  color: var(--light-color);
  font-size: 16px;
}

@media (width <= 768px) {
  .card-img {
    max-width: 200px;
    max-height: 200px;
  }
  .card-body {
    height: 150px;
    width: 200px;
  }
  .card-body h4 {
    font-size: 18px;
  }
  .card-body h5 {
    font-size: 14px;
  }
}
@media (width <= 400px) {
  .card-img {
    max-width: 180px;
    max-height: 180px;
  }
  .card-body {
    height: 150px;
    width: 250px;
    border-radius: 24px 70px 70px 24px;
  }
  .card-body h4 {
    font-size: 16px;
  }
  .card-body h5 {
    font-size: 12px;
  }
}
/* .offer-card {
  width: 250px;
  height: 150px;
  display: flex;
  align-items: center;
  background-color: var(--light-color);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 70px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  margin-top: 2rem;
}

.offer-card:hover {
  box-shadow: rgba(0, 0, 0, 0.28) 0px 8px 16px;
}
.card-img {
  width: 250px;
  height: 250px;
  position: absolute;
  left: -45%;
}
.card-img img {
  width: 100%;
  height: 100%;
  transition: transform 0.3s ease;
}
.offer-card:hover .card-img img {
  transform: scale(1.05);
}
.card-body {
  width: 100%;
  height: 100%;
  padding-left: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  position: relative;
}
.card-body h4 {
  font-size: clamp(14px, 2vw, 18px);
  font-weight: 600;
  text-align: center;
  color: var(--primary-color);
}

.card-body h5 {
  font-size: clamp(12px, 1.8vw, 16px);
  font-weight: 700;
  color: var(--secondary-color);
} */
</style>
