import Vue from "vue";
import VueRouter from "vue-router";
import Register from "../views/auth/Register.vue";
import store from "../store";
import Login from "../views/auth/Login.vue";
import Home from "../views/home/Home.vue";
import firebase from "firebase"

Vue.use(VueRouter);

const routes = [
  {
    name: "home",
    path: "/",
    component: Home,
    beforeEnter(to, from, next) {
      if (firebase.auth().currentUser) {
        store.commit("clearPosts");
        next(true);
      } else {
        next(false);
      }
    },
  },
  {
    name: "register",
    path: "/register",
    component: Register,
  },
  {
    name: "login",
    path: "/login",
    component: Login,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
