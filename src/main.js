import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

import ApiService from "./common/service.api";
import { CHECK_AUTH } from "./store/actions.type";

Vue.config.productionTip = false;

// Use initial setup to all around the app - use this init to call api wherever we want
ApiService.init();

// Keep user logged in over the app
router.beforeEach((to, from, next) =>
  Promise.all([store.dispatch(CHECK_AUTH)]).then(next)
);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
