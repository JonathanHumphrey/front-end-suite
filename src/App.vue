<script setup>
import { RouterLink, RouterView } from "vue-router";
import HeaderComponent from "./components/HeaderComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
</script>

<template>
  <div class="app-wrapper">
    <HeaderComponent />
    <div class="nav-bar">
      <nav>
        <RouterLink to="/" class="nav-link">Home</RouterLink>
        <RouterLink to="/about" class="nav-link">About</RouterLink>
      </nav>
    </div>
  </div>
  <RouterView />
  <FooterComponent />
</template>

<style >
html {
  background-color: #2c3e50;
}
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 95vh;
  width: 98vw;
}
.app-wrapper {
  height: 5rem;
  margin: 0;
}
.nav-bar {
  margin: auto;
  margin-top: 2rem;
}
.nav-link {
  text-decoration: none;
  background-color: #80a4ed;
  padding: 0.5rem;
  border-radius: 0.5rem;
  margin: 0.25rem;
  color: #ffffff;
}
.nav-link:hover {
  padding: 1rem;
  background-color: #bcd3f2;
}
</style>
