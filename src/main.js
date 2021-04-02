import "./firebaseApp";
import firebase from "firebase";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueSessionStorage from "vue-sessionstorage";
Vue.use(VueSessionStorage);

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");
  }
});
