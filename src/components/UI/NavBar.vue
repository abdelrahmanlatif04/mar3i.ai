<script setup>
import { useRouter } from "vue-router";
import { Icon } from "@iconify/vue";
import { reactive } from "vue";

const routes = reactive(useRouter().options.routes);
routes.pop();
</script>

<template>
  <nav class="w-full bg-[#fa0] py-1.5">
    <ul class="flex justify-around items-center w-full max-w-2xl mx-auto">
      <li v-for="route in routes" :key="route.name">
        <router-link
          :to="route.path"
          class="flex gap-2 items-center text-lg hover:text-white p-2 text-slate-800 font-semibold tracking-wider transition-colors"
        >
          <Icon class="text-3xl" :icon="route.meta.icon"></Icon>
          <p class="hidden md:block">{{ route.name }}</p>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style></style>
