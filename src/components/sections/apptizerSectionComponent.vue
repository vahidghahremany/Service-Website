<template>
  <div class="apptizer-section">
    <div class="title-group">
      <h4>APPTIZER</h4>
      <p class="flip">
        <span class="deg1"></span><span class="deg2"></span><span class="deg3"></span>
      </p>
    </div>
  </div>
</template>

<style>
.apptizer-section {
  width: 100%;
  height: 100vh;
  background-color: var(--primary-color);
  border-radius: 55px 55px 0 0;
  margin-top: -54px;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
}
.title-group {
  text-align: center;
  position: relative;
}
.title-group h4 {
  font-size: 34px;
  color: var(--light-color);
}
p.flip {
  margin-top: 24px;
  position: relative;
  display: block;
  width: 100%;
}
p.flip:after {
  position: absolute;
  bottom: 4px;
  left: -100px;
  right: 0;
  content: "";
  width: 40px;
  height: 1px;
  background: var(--secondary-color);
  margin: 0 auto;
}

p.flip:before {
  position: absolute;
  bottom: 4px;
  left: 100px;
  right: 0;
  content: "";
  width: 40px;
  height: 1px;
  background: rgb(242, 13, 51);
  margin: 0 auto;
}

p.flip span {
  position: absolute;
}

p.flip span.deg1 {
  position: absolute;
  bottom: 2px;
  left: -30px;
  right: 0;
  width: 6px;
  height: 6px;
  content: "";
  background: var(--secondary-color);
  -webkit-transform: rotate(135deg);
  -ms-transform: rotate(135deg);
  transform: rotate(135deg);
  margin: 0 auto;
}

p.flip span.deg2 {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 10px;
  height: 10px;
  content: "";
  background: var(--secondary-color);
  -webkit-transform: rotate(135deg);
  -ms-transform: rotate(135deg);
  transform: rotate(135deg);
  margin: 0 auto;
}

p.flip span.deg3 {
  position: absolute;
  bottom: 2px;
  left: 30px;
  right: 0;
  width: 6px;
  height: 6px;
  content: "";
  background: var(--secondary-color);
  -webkit-transform: rotate(135deg);
  -ms-transform: rotate(135deg);
  transform: rotate(135deg);
  margin: 0 auto;
}
</style>
