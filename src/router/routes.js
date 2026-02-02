import HomePage from "../pages/HomePage.vue";
import ChatBotPage from "../pages/ChatBotPage.vue";
import BMICalculatorPage from "../pages/BMICalculatorPage.vue";

const routes = [
  {
    name: "Home",
    path: "/",
    component: HomePage,
    meta: {
      icon: "mdi:home",
    },
  },

  {
    name: "Mar3i",
    path: "/mar3i-chatbot",
    component: ChatBotPage,
    meta: {
      icon: "mdi:robot",
    },
  },

  {
    name: "BMI calculator",
    path: "/BMI-calculator",
    component: BMICalculatorPage,
    meta: {
      icon: "mdi:calculator-variant",
    },
  },
  {
    name: "NotFound",
    path: "/:catchAll(.*)",
    redirect: {
      name: "Home",
    },
  },
];

export default routes;
