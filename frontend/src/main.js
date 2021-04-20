import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import jwt_decode from "jwt-decode";
import setAuthHeader from "./utils/setAuthHeader";



let start = async function() {
  let token = localStorage.getItem("jwtToken");

  if (token) {
    let currentTime = Date.now() / 1000;
    const decode = jwt_decode(token);

    if (currentTime > decode.exp) store.dispatch("logoutUser");
    else {
      setAuthHeader(token);

      await store.dispatch("getCurrentUser");
    }
  }

  new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount("#app");
};

start();
