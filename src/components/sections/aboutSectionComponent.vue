<template>
  <div class="about-section">
    <div class="about-container">
      <div class="section-title">
        <h2>ABOUT</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est minima recusandae corrupti
          sed! Iusto, corporis perspiciatis impedit, explicabo consequuntur debitis veritatis fuga
          minima magni inventore ad modi velit quisquam error.
        </p>
      </div>
      <div class="section-img">
        <img src="../../assets/imgs/pizaaaa.png" alt="about img" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-section {
  padding: 5rem 2rem;
  width: 100%;
  background-color: var(--light-color);
  font-family: "font-2", sans-serif;
  overflow-y: hidden;
}
.about-container {
  width: 70%;
  display: flex;
  padding: 3rem 3rem 0;
  background-color: var(--primary-color);
  border-radius: 16px 16px 44px 16px;
  gap: 10rem;
}
.section-title {
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  color: var(--light-color);
}
.section-title h2 {
  font-size: 34px;
}
.section-title p {
  font-size: 16px;
  line-height: 34px;
}
.section-img img {
  width: 300px;
  height: 300px;
  scale: 1.8;
}

@media (width <= 1024px) {
  .about-container {
    width: 100%;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    padding: 2rem;
  }
  .section-title {
    order: 2;
    width: 100%;
    align-items: center;
  }
  .section-title p {
    text-align: center;
  }
  .section-img img {
    scale: 1;
  }
}
</style>
