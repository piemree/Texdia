import Vue from "vue";
import VueRouter from "vue-router";
import Register from "../views/auth/Register.vue";
import Login from "../views/auth/Login.vue";
import Home from "../views/home/Home.vue";
import Profile from "../views/profile/Profile.vue";
import Index from "../views/index.vue";


Vue.use(VueRouter);

const routes = [

  {
    name: "index",
    path: "/",
    redirect:"/home",
    children:[
      {
        name: "home",
        path: "/home",
        component: Home,
      },
      {
        name:"profile",
        path:"/user/:id",
        component:Profile
      }
    ],
    component: Index,
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
