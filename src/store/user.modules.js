import ApiService from "@/common/service.api";
import { FETCH_PROFILE } from "./actions.type";
import { SET_PROFILE } from "./mutations.type";

const state = {
  profile: {}
};

const getters = {
  profile(state) {
    return state.profile;
  }
};
const mutations = {
  [SET_PROFILE](state, profile) {
    state.profile = profile;
  }
};

const actions = {
  [FETCH_PROFILE](context, payload) {
    const { username } = payload;
    return ApiService.get("profiles", username)
      .then(({ data }) => {
        context.commit(SET_PROFILE, data.profile);
        return data;
      })
      .catch(err => {
        console.log(err);
      });
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
