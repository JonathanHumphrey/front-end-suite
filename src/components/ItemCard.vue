<!-- eslint-disable prettier/prettier -->
<script setup>
const cardItems = [
  {
    id: 0,
    header: "First Picture",
    body: "https://picsum.photos/200",
    footer: "Some footer text",
  },
  {
    id: 1,
    header: "Second Picture",
    body: "https://picsum.photos/201",
    footer: "Some footer text",
  },
  {
    id: 2,
    header: "Third Picture",
    body: "https://picsum.photos/202",
    footer: "Some footer text",
  },
];
</script>

<template>
  <div class="card" v-for="item in cardItems" :key="item.id">
    <slot name="header" :header="item.header"></slot>
    <slot name="body" :body="item.body" :image="item.body"></slot>
    <slot name="footer" :footer="item.footer"></slot>
  </div>
</template>

<style scoped>
.card {
  color: black;
  box-shadow: 0 4px 8px 0 rgba(255, 255, 255, 0.2);
  transition: 0.3s;
  margin-bottom: 20px;
  border-radius: 2rem;
  background: white;
  width: 20rem;
}
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(255, 255, 255, 0.2);
}
</style>
