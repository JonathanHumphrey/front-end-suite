<script setup>

import UserFeedback from "./UserFeedback.vue"


const contactData = [
  {
    twitter: "twitter.com",
    email: "generic_email@email.com",
  },
];
</script>

<template>
  <div class="footer-wrapper">
    <div class="contact">
      <h4>Contact</h4>
      <ul v-for="contact in contactData">
        <li>{{ contact.twitter }}</li>
        <li>{{ contact.email }}</li>
      </ul>
    </div>
    <div class="feedback">
      <UserFeedback />
    </div>
  </div>
</template>

<style scoped>
.footer-wrapper {
  background: #e6e1c5;
  width: 100%;
  margin: auto;
  position: fixed;
  bottom: 0;
  border-radius: 0.25rem;
  display: flex;
  justify-content: space-around;
}
.contact {
  border: solid black;
  width: 20%;
  text-align: left;
}
</style>