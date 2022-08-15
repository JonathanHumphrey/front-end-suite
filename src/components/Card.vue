<!-- eslint-disable prettier/prettier -->
<template>
  <div class="card">
    <div id="card-header">
      <slot name="header"></slot>
    </div>
    <div id="card-body">
      <slot name="body"></slot>
    </div>
    <div id="card-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "Card",
};
</script>
<style scoped>
.card {
  color: black;
  box-shadow: 0 4px 8px 0 rgba(255, 255, 255, 0.2);
  transition: 0.3s;
  padding: 16px;
  margin-bottom: 20px;
  width: 200px;
  border-radius: 2rem;
  background: white;
}
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(255, 255, 255, 0.2);
}
</style>
