import Vue from "vue";
import { ArticlesService } from "@/common/service.api";
import {
  FETCH_ARTICLE,
  ARTICLE_PUBLISH,
  ARTICLE_EDIT,
  ARTICLE_EDIT_ADD_TAG,
  ARTICLE_EDIT_REMOVE_TAG,
  ARTICLE_DELETE,
  ARTICLE_RESET_STATE
} from "./actions.type";
import {
  RESET_STATE,
  SET_ARTICLE,
  TAG_ADD,
  TAG_REMOVE
} from "./mutations.type";

const initialState = {
  article: {
    author: {},
    title: "",
    description: "",
    body: "",
    tagList: []
  }
};

export const state = { ...initialState };

export const actions = {
  async [FETCH_ARTICLE](context, articleSlug) {
    const { data } = await ArticlesService.get(articleSlug);
    context.commit(SET_ARTICLE, data.article);
    return data;
  },
  [ARTICLE_PUBLISH]({ state }) {
    return ArticlesService.create(state.article);
  },
  [ARTICLE_DELETE](context, slug) {
    return ArticlesService.destroy(slug);
  },
  [ARTICLE_EDIT]({ state }) {
    return ArticlesService.update(state.article.slug, state.article);
  },
  [ARTICLE_EDIT_ADD_TAG](context, tag) {
    context.commit(TAG_ADD, tag);
  },
  [ARTICLE_EDIT_REMOVE_TAG](context, tag) {
    context.commit(TAG_REMOVE, tag);
  },
  [ARTICLE_RESET_STATE]({ commit }) {
    commit(RESET_STATE);
  }
};

export const mutations = {
  [SET_ARTICLE](state, article) {
    state.article = article;
  },
  [TAG_ADD](state, tag) {
    state.article.tagList = state.article.tagList.concat([tag]);
  },
  [TAG_REMOVE](state, tag) {
    state.article.tagList = state.article.tagList.filter(t => t !== tag);
  },
  [RESET_STATE]() {
    for (let f in state) {
      Vue.set(state, f, initialState[f]);
    }
  }
};

const getters = {
  article(state) {
    return state.article;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
