<template>
  <div class="map">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d43359.215739417785!2d51.3509144522447!3d35.73862581479361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1714968473352!5m2!1sen!2s"
      width="600"
      height="450"
      style="border: 0"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</template>

<style scoped>
iframe {
  border-radius: 25px;
}

@media (width <= 568px) {
  iframe {
    width: 350px;
    height: 350px;
  }
}
</style>
