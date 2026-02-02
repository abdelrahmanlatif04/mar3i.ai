<script setup>
import { reactive, ref } from "vue";
import BotChat from "../components/UI/ChatBot/BotChat.vue";
import UserChat from "../components/UI/ChatBot/UserChat.vue";
import { Icon } from "@iconify/vue";
const msg = ref(null);
const messages = reactive([]);
const ableToSendPrompt = ref(true);

async function sendPrompt() {
  const prompt = msg.value;
  if (prompt) {
    const API_KEY = import.meta.env.VITE_API_KEY;
    const URL = import.meta.env.VITE_URL;
    addUserDialog();

    setTimeout(() => {
      messages.push("<i>Mar3i is thinking...<i/>");
    }, 800);
    ableToSendPrompt.value = false;
    const response = await fetch(URL, {
      method: "POST",
      body: JSON.stringify({
        model: "gpt-5-nano",
        input: `
            If not sport-related, say: I don't understand you.
            style the output with html outlining content br
            minimum lines possible
            ${prompt}
              `,
      }),
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    messages[messages.length - 1] = data["output"][1]["content"][0]["text"];
    console.log(messages[messages.length - 1]);
    ableToSendPrompt.value = true;
  }
}

function addUserDialog() {
  messages.push(msg.value);
  msg.value = null;
}
</script>
<template>
  <div class="w-full flex justify-center">
    <div class="bg-slate-400 flex flex-col w-[600px] p-2.5">
      <div v-for="(message, idx) in messages" :key="message">
        <UserChat v-if="!(idx % 2)" :msg="message" />
        <BotChat v-else :msg="message" />
      </div>

      <div class="w-full flex flex-col justify-end max-w-xl mx-auto flex-1">
        <div
          class="flex items-center gap-2 rounded-2xl border border-gray-300 bg-white px-4 py-3 focus-within:border-[#ffaa00] focus-within:ring-2 focus-within:ring-[#ffaa00]/40 transition"
        >
          <input
            type="text"
            placeholder="How can I help you..."
            class="flex-1 bg-transparent outline-none text-gray-800 placeholder:text-gray-400"
            v-model="msg"
            @keypress="
              (e) => {
                if (e.key == 'Enter' && ableToSendPrompt) sendPrompt();
              }
            "
          />

          <button
            @click="sendPrompt()"
            class="text-[#ffaa00] hover:opacity-80 transition text-2xl"
            :disabled="ableToSendPrompt"
          >
            <Icon v-if="ableToSendPrompt" icon="mdi:send-variant" />
            <Icon v-else class="animate-spin" icon="mdi:loading" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
