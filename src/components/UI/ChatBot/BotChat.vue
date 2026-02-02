<script setup>
import { Icon } from "@iconify/vue";
import { defineProps } from "vue";
const props = defineProps(["msg"]);
</script>

<template>
  <div class="bot-chat">
    <p v-html="msg"></p>
    <Icon
      icon="mdi:robot"
      class="absolute left-0 top-1 -translate-x-[150%] text-2xl bg-white p-1 rounded-full"
    />
  </div>
</template>

<style scoped>
.bot-chat {
  @apply max-w-[600px] w-fit min-w-40 shadow-md mr-auto ml-10 relative bg-slate-200 py-1 px-2 rounded my-5;
}
</style>
