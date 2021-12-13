import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";

import store from "./store";
import ApiService from "./common/api.service";
import DefaultLayout from "./layouts/Default.vue";

import AppModal from "./components/general/AppModal.vue";
import AppLoader from "./components/general/AppLoader.vue";
import AppInput from "@/components/form/AppInput";
import AppButton from "@/components/form/AppButton";

import "@/assets/styles/animations.css";
import "./assets/styles/index.css";

ApiService.init(store);

Vue.component("default-layout", DefaultLayout);
Vue.component("app-modal", AppModal);
Vue.component("app-loader", AppLoader);
Vue.component("app-input", AppInput);
Vue.component("app-button", AppButton);

console.log("%c¡Detente!", "color: #f22539; font-size: 30px; font-weight: bold;");
console.log(
  "%cSi alguien te dijo que pegaras algo acá, esta tratando de robar tu pokemón!",
  "color: #bfbfbf; font-size: 20px; letter-spacing: 20px; font-weight: bold;"
);

const vue = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
ApiService.setVue(vue);
