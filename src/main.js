import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

import ApiService from "./common/services/apiService";
import { checkAuth } from "@/store/types/actions";

Vue.config.productionTip = false;

// Using Event bus to make sidebar visible in smaller screen
export const eventBus = new Vue();

// Use initial setup to all around the app - use this init to call api wherever we want
ApiService.init();

// Keep user logged in over the app
router.beforeEach((to, from, next) =>
  Promise.all([store.dispatch(checkAuth)]).then(next)
);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
