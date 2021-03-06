import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import Vuesax from "vuesax";
import "material-icons/iconfont/material-icons.css";
import "vuesax/dist/vuesax.css"; //Vuesax styles
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
Vue.use(VueSweetalert2);
Vue.use(Vuesax, {
  colors: {
    primary:'#5b3cc4',
    success:'rgb(23, 201, 100)',
    danger:'rgb(242, 19, 93)',
    warning:'rgb(255, 130, 0)',
    dark:'rgb(36, 33, 69)'
  }
})



Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
