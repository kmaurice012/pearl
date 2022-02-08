import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Users from "../views/Users.vue";
import Gamers from "../views/Gamers.vue";
import Blog from "../views/Blog.vue";

import VImage from "v-image";

Vue.use(VImage);

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/users",
    name: "users",
    component: Users,
  },
  {
    path: "/gamers",
    name: "Gamers",
    component: Gamers,
  },
  {
    path: "/blog",
    name: "blog",
    component: Blog,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
