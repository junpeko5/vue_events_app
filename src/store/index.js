import Vue from "vue";
import Vuex from "vuex";
import * as event from "@/store/modules/event";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    categories: ["はじめて", "初級", "中級", "中上級", "オープン"],
  },
  mutations: {},
  actions: {},
  modules: {
    event,
  },
});
