<template>
  <div class="nav-bar">
    <div class="nav-bar__container">
      <div class="nav-bar__text">
        <span>Awesome navbar</span>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss">
.nav-bar {
  max-width: 144rem;
  height: 9rem;
  background-color: #1e293b;
  display: flex;
  justify-content: center;
  align-items: center;

  &__text {
    span {
      letter-spacing: 1rem;
      font-weight: 700;
    }
  }
}
</style>
