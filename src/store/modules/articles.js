import { TagsService } from "@/common/services/tagsService";
import { ArticlesService } from "@/common/services/articlesService";
import { fetchArticles, fetchTags, deleteArticle } from "../types/actions";
import {
  setLoading,
  setArticles,
  setTags,
  updateArticleInList
} from "../types/mutations";

const state = {
  tags: [],
  articles: [],
  isLoading: true,
  articlesCount: 0
};

const getters = {
  articlesCount(state) {
    return state.articlesCount;
  },
  articles(state) {
    return state.articles;
  },
  isLoading(state) {
    return state.isLoading;
  },
  tags(state) {
    return state.tags;
  }
};

const actions = {
  [fetchArticles]({ commit }, params) {
    commit(setLoading);
    return ArticlesService.query(params.filters)
      .then(({ data }) => {
        commit(setArticles, data);
      })
      .catch(error => {
        throw new Error(error);
      });
  },
  [fetchTags]({ commit }) {
    return TagsService.get()
      .then(({ data }) => {
        commit(setTags, data.tags);
      })
      .catch(error => {
        throw new Error(error);
      });
  },
  [deleteArticle](context, slug) {
    return ArticlesService.destroy(slug);
  }
};

const mutations = {
  [setLoading](state) {
    state.isLoading = true;
  },
  [setArticles](state, { articles, articlesCount }) {
    state.articles = articles;
    state.articlesCount = articlesCount;
    state.isLoading = false;
  },
  [setTags](state, tags) {
    state.tags = tags;
  },
  [updateArticleInList](state, data) {
    state.articles = state.articles.map(article => {
      if (article.slug !== data.slug) {
        return article;
      }
    });
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
