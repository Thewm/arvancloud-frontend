import Vue from "vue";
import axios from "axios";
import Jwt from "@/common/storage";
import { API_URL } from "@/common/config";

const ApiService = {
  init() {
    Vue.use(axios);
    axios.defaults.baseURL = API_URL;
  },

  setHeader() {
    axios.defaults.headers.common["Authorization"] = `Token ${Jwt.getToken()}`;
  },

  query(resource, params) {
    return axios.get(resource, params).catch(error => {
      throw new Error(`ApiService ${error}`);
    });
  },

  get(resource, slug = "") {
    return axios.get(`${resource}/${slug}`).catch(error => {
      throw new Error(`ApiService ${error}`);
    });
  },

  post(resource, params) {
    return axios.post(`${resource}`, params);
  },

  update(resource, slug, params) {
    return axios.put(`${resource}/${slug}`, params);
  },

  put(resource, params) {
    return axios.put(`${resource}`, params);
  },

  delete(resource) {
    return axios.delete(resource).catch(error => {
      throw new Error(`ApiService ${error}`);
    });
  }
};
export default ApiService;
