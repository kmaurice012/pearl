import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import upperFirst from "lodash/upperFirst";
// import camelCase from "lodash/camelCase";
import Vuesax from "vuesax";
import "material-icons/iconfont/material-icons.css";
import "vuesax/dist/vuesax.css"; //Vuesax styles
Vue.use(Vuesax, {
  // options here
  colors: {
    primary:'#5b3cc4',
    success:'rgb(23, 201, 100)',
    danger:'rgb(242, 19, 93)',
    warning:'rgb(255, 130, 0)',
    dark:'rgb(36, 33, 69)'
  }

});

// const requireComponent = require.context(
//   "./components",
//   false,
//   /Base[A-Z]\w+\.(vue|js)$/
// );

// requireComponent.keys().forEach((fileName) => {
//   const componentConfig = requireComponent(fileName);

//   const componentName = upperFirst(
//     camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, "$1"))
//   );

//   Vue.component(componentName, componentConfig.default || componentConfig);
// });
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
