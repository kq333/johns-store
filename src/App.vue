<template>
  <nav>
    <c-Navbar />
  </nav>

  <router-view />
</template>

<script setup>
import cNavbar from "./components/cNavbar.component.vue";
</script>

<style lang="scss">
:root {
  font-size: 10px;
}
body,
html {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  max-width: 144rem;
  height: 100vh;
  margin: auto;

  @media (max-width: 320px) {
    font-size: 1.5rem;
  }
  @media (min-width: 375px) {
    font-size: 2rem;
  }
}
nav {
  position: fixed;
  width: 100%;
  height: auto;
  top: 0;
}
</style>
