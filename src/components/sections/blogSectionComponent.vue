<script setup>
import { blogItems } from "@/data/blogItems";
</script>

<template>
  <div class="blog-section">
    <div class="title-group">
      <h4>BLOG</h4>
      <p class="flip">
        <span class="deg1"></span><span class="deg2"></span><span class="deg3"></span>
      </p>
    </div>
    <div class="row-group">
      <div class="blog-card" v-for="item in blogItems" :key="item.Id">
        <div class="blog-img">
          <img :src="item.image" alt="blog image" />
        </div>
        <div class="card-title-group">
          <p>{{ item.publishDate }}</p>
          <h4>{{ item.name }}</h4>
        </div>
        <div class="desc">
          <p>{{ item.describtion }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.blog-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem 0;
  background-color: var(--primary-color);
}
.row-group {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
}
.blog-card {
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
  margin-bottom: 2rem;
}
.blog-img {
  width: 350px;
  height: 250px;
}
.blog-img img {
  width: 100%;
  height: 100%;
  border-radius: 16px;
}
.card-title-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}
.card-title-group p {
  color: gray;
  font-size: 14px;
  font-family: "font-2", sans-serif;
}
.card-title-group h4 {
  font-size: 16px;
  color: var(--light-color);
  font-family: "font-2", sans-serif;
}
.desc p {
  font-size: 16px;
  font-family: "font-2", sans-serif;
  text-align: center;
  color: var(--light-color);
}
</style>
