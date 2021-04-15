import axios from "axios";
import router from "../../router";
import setAuthHeader from "../../utils/setAuthHeader";
export default {
  async registerNewUser(vuexContext, newUser) {
    try {
      await axios.post("http://localhost:5000/api/users/register", newUser);
      router.push("/login");
      vuexContext.commit("setErrors", {});
    } catch (error) {
      vuexContext.commit("setErrors", error.response.data.errors);
    }
  },

  async loginEmailAndPassword(vuexContext, User) {
    try {
      let response = await axios.post(
        "http://localhost:5000/api/users/login",
        User
      );

      let { user, token } = response.data;

      localStorage.setItem("jwtToken", token);

      vuexContext.commit("isAuth", Object.keys(user).length !== 0);
      vuexContext.dispatch("getCurrentUser", token);

      setAuthHeader(token);

      token ? router.push("/home") : router.push("/login");

      vuexContext.commit("setLoginErrors", {});
    } catch (error) {
      vuexContext.commit("setLoginErrors", error.response.data);
    }
  },

  async getCurrentUser(vuexContext) {
    let response = await axios.get("http://localhost:5000/api/users/");

    vuexContext.commit("isAuth", Object.keys(response.data).length !== 0);
    vuexContext.commit("setUser", response.data);
    return response;
  },

};
