import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import { API_URL } from "@/common/config";

var _Store = null;
var _Vue = null;

const ApiService = {
  init(Store) {
    _Store = Store;
    Vue.use(VueAxios, axios);
    Vue.axios.defaults.baseURL = API_URL;
    this.setHeader();
  },

  setHeader() {
    Vue.axios.defaults.timeout = 180 * 1000;
  },

  setVue(vue) {
    _Vue = vue;
  },

  query(resource, params) {
    return Vue.axios.get(resource, params).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  },

  _handleError(error) {
    // catch general errors API
    return Promise.reject(error);
  },

  get(resource, slug = "") {
    return Vue.axios
      .get(`${resource}/${slug}`)
      .then(result => {
        return Promise.resolve(result.data);
      })
      .catch(this._handleError);
  },

  async post(resource, params) {
    try {
      let result = await Vue.axios.post(`${resource}`, params);
      return result.data;
    } catch (err) {
      return this._handleError(err);
    }
  }
};

export default ApiService;
