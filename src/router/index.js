import Vue from "vue";
import VueRouter from "vue-router";
import VueRouteMiddleware from "vue-route-middleware";
import VueCookies from "vue-cookies";
import Register from "../views/auth/Register.vue";
import Login from "../views/auth/Login.vue";
import Home from "../views/home/Home.vue";
Vue.use(VueCookies);
Vue.use(VueRouter);

const routes = [
  {
    name: "home",
    path: "/",
    component: Home,
    meta: {
      middleware: [
        (to, from, next) => {
          let token = Vue.$cookies.get("token");
          if (token) {
            return next();
          }
          return next({
            name: "login",
          });
        },
      ],
    },
  },
  {
    name: "register",
    path: "/register",
    component: Register,
    meta: {
      middleware: [
        (to, from, next) => {
          let token = Vue.$cookies.get("token");
          if (token) {
            return next({
              name: "home",
            });
          }
          return next();
        },
      ],
    },
  },
  {
    name: "login",
    path: "/login",
    component: Login,
    meta: {
      middleware: [
        (to, from, next) => {
          let token = Vue.$cookies.get("token");
          if (token) {
            return next({
              name: "home",
            });
          }
          return next();
        },
      ],
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

router.beforeEach(VueRouteMiddleware());
