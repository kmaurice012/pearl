import Vue from "vue";
import Vuex from "vuex";
import gamers from "../services/Users.js";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    gamers: gamers,
  },
  mutations: {
    delete_gamer(state, index) {
      if (index > -1) {
        state.gamers.splice(index, 1);
      }
    }
  },
  add_gamer(state, payload) {
    state.gamers.push(payload);
  },
  actions: {
    removeGamer({ state, commit }, id) {
      try {
        var index = state.gamers
          .map((i) => {
            if (id == i.id) return true;
            return false;
          })
          .indexOf(true);

        if (index != -1) {
          commit("remove_gamer", index);
          return true;
        } else {
          return false;
        }
      } catch (error) {
        return false;
      }
    },
  },
  addGamer({ commit }, payload) {
    commit("add_customer", payload);
  },
  modules: {},
});
