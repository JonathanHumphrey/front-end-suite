<script setup>
const headerData = [
  {
    title: "A Generic Title",
    body: "For a Generic Website",
  },
];
</script>

<template>
  <div class="header-wrapper" v-for="item in headerData" :key="item.title">
    <h3>{{ item.title }}</h3>
    <p>{{ item.body }}</p>
  </div>
</template>

<style scoped>
.header-wrapper {
  background: #e6e1c5;
  margin: auto;
  width: 100vw;
  position: relative;
  top: -20px;
  border-radius: 0.25rem;
}
</style>