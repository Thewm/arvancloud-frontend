import Vue from "vue";
import Vuex from "vuex";

import auth from "./auth.module";
import article from "./article.modules";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    article
  }
});
