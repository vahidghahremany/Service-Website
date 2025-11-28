<script setup>
import instagramIcon from "../icons/instagramIcon.vue";
import callIcon from "../icons/callIcon.vue";
import mailIcon from "../icons/mailIcon.vue";
</script>

<template>
  <footer class="footer">
    <div class="footer-grid">
      <div class="footer-col">
        <h6>ABOUT US</h6>
        <p class="about-text">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
          there live the blind texts.
        </p>
        <div class="social-row">
          <instagramIcon />
          <callIcon />
          <mailIcon />
        </div>
      </div>
      <div class="footer-col offers">
        <p class="offer-title">Send Email For More Offers</p>
        <input type="email" placeholder="Email..." />
        <input type="submit" value="Submit" />
      </div>
      <div class="footer-col small-col">
        <h6><b>SERVICES</b></h6>
        <p class="mt">Cooked</p>
        <p>Deliver</p>
        <p>Quality Foods</p>
        <p>Mixed</p>
      </div>
      <div class="footer-col small-col">
        <h6><b>HAVE A QUESTION?</b></h6>

        <p class="mt icon-text">
          <span>203 Fake St. Mountain View, San Francisco, California, USA</span>
        </p>

        <p class="icon-text">
          <span>+2 392 3929 210</span>
        </p>

        <p class="icon-text">
          <span>info@yourdomain.com</span>
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  color: var(--light-color);
}
.footer-col h6 {
  font-size: 21px;
  font-weight: bold;
  margin-bottom: 20px;
}
.about-text {
  margin-top: 20px;
  line-height: 1.6;
}
.mt {
  margin-top: 20px;
}
.social-row {
  display: flex;
  gap: 20px;
  margin-top: 25px;
}
.offers {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.offers input[type="email"] {
  width: 100%;
  padding: 10px 12px;
  margin-top: 12px;
  border-radius: 6px;
  border: 1px solid #ccc;
}
.offers input[type="submit"] {
  margin-top: 12px;
  width: 100%;
  padding: 10px;
  background: var(--secondary-color);
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
.icon-text {
  display: flex;
  align-items: center;
  gap: 10px;
  line-height: 1.6;
}

@media (max-width: 992px) {
  .footer-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .footer-grid {
    grid-template-columns: 1fr;
  }
  .footer-col {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .icon-text {
    text-align: center;
  }
}
</style>
