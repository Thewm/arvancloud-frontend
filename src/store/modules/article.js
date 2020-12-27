import Vue from "vue";
import { ArticlesService } from "@/common/services/articlesService";
import {
  fetchArticle,
  publishArticle,
  editArticle,
  addTagToArticle,
  removeTagFromArticle,
  deleteArticle,
  resetArticleState
} from "../types/actions";
import {
  resetModuleState,
  setArticle,
  addTag,
  removeTag
  //   updateArticleInList
} from "../types/mutations";

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
  async [fetchArticle](context, articleSlug) {
    // avoid extronuous network call if article exists
    // if (prevArticle !== undefined) {
    //   return context.commit(setArticle, prevArticle);
    // }
    const { data } = await ArticlesService.get(articleSlug);
    context.commit(setArticle, data.article);
    return data;
  },
  [publishArticle]({ state }) {
    return ArticlesService.create(state.article);
  },
  [deleteArticle](context, slug) {
    return ArticlesService.destroy(slug);
  },
  [editArticle]({ state }) {
    return ArticlesService.update(state.article.slug, state.article);
  },
  [addTagToArticle](context, tag) {
    context.commit(addTag, tag);
  },
  [removeTagFromArticle](context, tag) {
    context.commit(removeTag, tag);
  },
  [resetArticleState]({ commit }) {
    commit(resetModuleState);
  }
};

export const mutations = {
  [setArticle](state, article) {
    state.article = article;
  },
  [addTag](state, tag) {
    state.article.tagList = state.article.tagList.concat([tag]);
  },
  [removeTag](state, tag) {
    state.article.tagList = state.article.tagList.filter(t => t !== tag);
  },
  [resetModuleState]() {
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
