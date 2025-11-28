<script setup>
import mapComponent from "../ui/mapComponent.vue";
</script>

<template>
  <div class="contact-section">
    <mapComponent />
    <div class="contact-form">
      <div class="form-header"><h3>Contact us</h3></div>
      <form action="">
        <div class="form-group">
          <label for="full-name">Full Name</label>
          <input type="text" name="full-name" />
        </div>
        <div class="form-group">
          <label for="phone-number">Phone Number</label>
          <input type="number" name="phone-number" />
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea name="message"></textarea>
        </div>
      </form>
      <button type="submit">Send Message</button>
    </div>
  </div>
</template>

<style scoped>
.contact-section {
  width: 100%;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 4rem;
  border-radius: 34px 34px 0 0;
  background-color: var(--light-color);
  font-family: var(--en-font);
}
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
}
.contact-form form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.contact-form form input {
  width: 400px;
  padding: 8px;
  border-radius: 8px;
  border: 0.5px solid var(--primary-color);
}
.contact-form form textarea {
  width: 400px;
  height: 89px;
  border-radius: 8px;
  border: 0.5px solid var(--primary-color);
}
.contact-form .form-header {
  font-size: 34px;
}
.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.contact-section button {
  width: 100%;
  background-color: var(--secondary-color);
  border-radius: 8px;
  padding: 1rem 0;
  color: var(--light-color);
}
</style>
