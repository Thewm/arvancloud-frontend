import Vue from "vue";
import Vuex from "vuex";

import auth from "./auth.module";
import user from "./user.modules";
import article from "./article.modules";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    user,
    article
  }
});
