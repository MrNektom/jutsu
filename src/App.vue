<script setup>
import SideNavbar from './components/SideNavbar.vue';
</script>

<template>
  <div class="App">
    <router-view class="content" />
    <SideNavbar title="Школа техник Наруто" class="navbar" />
  </div>
</template>

<style scoped>
.App {
  display: flex;
  flex-direction: column;
  height: 100%;
}

@media screen and (min-width: 786px) {
  .App {
    flex-direction: row-reverse;
  }
}
.content {
  flex-grow: 1;
}
</style>