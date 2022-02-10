import Vue from "vue";
import Vuex from "vuex";
import gamers from "../services/Users.js";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    gamers: gamers,
  },
  mutations: {
    delete_gamer(state, id) {
      if (id > -1) {
        state.gamers.splice(id, 1);
      }
    }
  },
  add_gamer(state, payload) {
    state.gamers.push(payload);
  },
  actions: {
    removeGamer(id) {
  //  console.log(id, "Almost there");
   this.$http.delete('http://localhost:3000/gamers/' + id)
          .then(() => {              
              this.gamers.splice(id, 1)
          })
    },
  },
  addGamer({ commit }, payload) {
    commit("add_gamer", payload);
  },
  modules: {},
});
