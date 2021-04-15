import Vue from "vue";
import VueRouter from "vue-router";
import Register from "../views/auth/Register.vue";
import Login from "../views/auth/Login.vue";
import Home from "../views/home/Home.vue";
import Profile from "../views/profile/Profile.vue";
import Index from "../views/index.vue";
import store from "../store/index";

Vue.use(VueRouter);

const routes = [
  {
    name: "index",
    path: "/",
    redirect: "/home",
    beforeEnter: (to, from, next) => {
      console.log(store.getters.getAuthState, "home");
      store.getters.getAuthState ? next(true) : next("/login");
    },
    children: [
      {
        name: "home",
        path: "/home",
        component: Home,
      },
      {
        name: "profile",
        path: "/user/:id",
        component: Profile,
      },
    ],
    component: Index,
  },
  {
    name: "register",
    path: "/register",
    component: Register,
    beforeEnter: (to, from, next) => {
      if (store.getters.getAuthState) {
        next("/home");
      } else {
        next(true);
      }
    },
  },
  {
    name: "login",
    path: "/login",
    component: Login,
    beforeEnter: (to, from, next) => {
      if (store.getters.getAuthState) {
        next("/home");
      } else {
        next(true);
      }
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
