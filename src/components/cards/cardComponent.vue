<script setup>
import bagAddIcon from "../icons/bagAddIcon.vue";
import starIcon from "../icons/starIcon.vue";

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="card">
    <div class="card-header">
      <h3>{{ props.item.name }}</h3>
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
        <div class="price">{{ "$" + props.item.price + ".000" }}</div>
      </div>
      <div class="card-btn">
        <button type="button"><bagAddIcon /></button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 200px;
  height: 310px;
  background-color: var(--primary-color);
  border-radius: 34px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--light-color);
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  padding: 20px 0 0;
  overflow: hidden;
  font-family: "font-2", sans-serif;
}
.card-img {
  width: 100%;
}
.card-img img {
  width: 200px;
  height: 200px;
}
.card-body {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.card-content {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 4px;
  padding: 0 0px 24px 24px;
}
.score {
  display: flex;
  align-items: center;
  gap: 4px;
  color: rgb(255, 219, 47);
}
.score svg {
  fill: rgb(255, 219, 47);
}
.card-btn button {
  width: 80px;
  height: 80px;
  background-color: var(--secondary-color);
  display: flex;
  justify-content: center;
  padding-top: 16px;
  transition: all 0.5s ease;
  cursor: pointer;
  border-top-left-radius: 10px;
}
.card-btn button:hover svg {
  scale: 1.1;
}
</style>
