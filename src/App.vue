<script setup>
import NavBar from "./components/UI/NavBar.vue";

// getData();
</script>

<template>
  <div class="flex flex-col-reverse md:flex-col min-h-screen">
    <NavBar />
    <router-view class="flex-1"></router-view>
  </div>
</template>
