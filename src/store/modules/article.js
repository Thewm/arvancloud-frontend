import { ArticlesService } from "@/common/services/articlesService";
import {
  fetchArticle,
  publishArticle,
  editArticle,
  addTagToArticle,
  removeTagFromArticle,
  deleteArticle
} from "../types/actions";
import { setArticle, addTag, removeTag } from "../types/mutations";

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
    const { data } = await ArticlesService.get(articleSlug);
    context.commit(setArticle, data.article);
    return data;
  },
  [publishArticle]({ state }) {
    return ArticlesService.create(state.article);
  },
  async [deleteArticle](context, slug) {
    const res = await ArticlesService.destroy(slug);
    if (res.status === 200) {
      return new Promise(resolve => resolve(200));
    }
  },
  [editArticle]({ state }) {
    return ArticlesService.update(state.article.slug, state.article);
  },
  [addTagToArticle](context, tag) {
    context.commit(addTag, tag);
  },
  [removeTagFromArticle](context, tag) {
    context.commit(removeTag, tag);
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
