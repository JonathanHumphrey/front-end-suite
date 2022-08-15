<script setup>
import Card from "../components/Card.vue";
</script>

<template>
  <div class="wrapper">
    <Card>
      <template v-slot:header>
        <h1>Header</h1>
      </template>
      <template v-slot:body>
        <p>this is a string of text in the body of the card component</p>
      </template>
      <template v-slot:footer>
        <ul>
          <li>list 1</li>
          <li>list 2</li>
        </ul>
      </template>
    </Card>
  </div>
</template>

<style scoped>
</style>
