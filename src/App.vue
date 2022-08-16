<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="app-wrapper">
    <div class="nav-bar">
      <nav>
        <RouterLink to="/" class="nav-link">Home</RouterLink>
        <RouterLink to="/about" class="nav-link">About</RouterLink>
      </nav>
    </div>
  </div>
  <RouterView />
</template>

<style >
html {
  background-color: #2c3e50;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.wrapper {
  width: 100%;
  height: 5rem;
}
.nav-bar {
  margin: auto;
  margin-top: 2rem;
}
.nav-link {
  text-decoration: none;
  background-color: #41777e;
  padding: 0.5rem;
  border-radius: 0.5rem;
  margin: 0.25rem;
  color: #ffffff;
}
.nav-link:hover {
  padding: 1rem;
}
</style>
