import ApiService from "@/common/services/apiService";
import Jwt from "@/common/storage";
import { login, logout, register, checkAuth } from "../types/actions";
import { setUser, CLEAN_AUTH, setError } from "../types/mutations";

const state = {
  errors: {},
  user: {},
  isAuthenticated: Boolean(Jwt.getToken())
};

const getters = {
  currentUser(state) {
    return state.user;
  },
  isAuthenticated(state) {
    return state.isAuthenticated;
  }
};

const actions = {
  [login](context, credentials) {
    return ApiService.post("users/login", { user: credentials })
      .then(({ data }) => {
        context.commit(setUser, data.user);
        return data;
      })
      .catch(({ response }) => {
        context.commit(setError, response.data.errors);
      });
  },
  [logout](context) {
    context.commit(CLEAN_AUTH);
  },
  [register](context, credentials) {
    return ApiService.post("users", { user: credentials })
      .then(({ data }) => {
        context.commit(setUser, data.user);
        return data;
      })
      .catch(({ response }) => {
        context.commit(setError, response.data.errors);
      });
  },
  [checkAuth](context) {
    if (Jwt.getToken()) {
      ApiService.setHeader();
      ApiService.get("user")
        .then(({ data }) => {
          context.commit(setUser, data.user);
        })
        .catch(({ response }) => {
          context.commit(setError, response.data.errors);
        });
    } else {
      context.commit(CLEAN_AUTH);
    }
  }
};

const mutations = {
  [setError](state, error) {
    state.errors = error;
  },
  [setUser](state, user) {
    state.isAuthenticated = true;
    state.user = user;
    state.errors = {};
    Jwt.saveToken(state.user.token);
  },
  [CLEAN_AUTH](state) {
    state.isAuthenticated = false;
    state.user = {};
    state.errors = {};
    Jwt.destroyToken();
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
