import axios from "axios";
import router from "../../router";
import setAuthHeader from "../../utils/setAuthHeader";

export default {
  //Authentication
  async registerNewUser(vuexContext, newUser) {
    try {
      await axios.post("http://localhost:5000/api/users/register", newUser);
      router.push("/login");
      vuexContext.commit("setErrors", {});
    } catch (error) {
      console.log(error.response);
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

      setAuthHeader(token);

      vuexContext.dispatch("getCurrentUser");

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
  logoutUser(vuexContext) {
    localStorage.removeItem("jwtToken");
    setAuthHeader();
    vuexContext.commit("setUser", null);
    vuexContext.commit("isAuth", false);
    router.push("/login");
  },

  //Sending post
  async addPost(vuexContext, text) {
    try {
      let post = await axios.post("http://localhost:5000/api/posts/add", {
        text,
      });
      vuexContext.commit("clearPosts");
      await vuexContext.dispatch("getAllPosts");
      return post;
    } catch (error) {
      console.log(error);
    }
  },

  //getting all posts
  async getAllPosts(vuexContext) {
    try {
      let posts = await axios.get("http://localhost:5000/api/posts/");

      vuexContext.commit("setPosts", posts.data);
    } catch (error) {
      console.log(error.response);
    }
  },

  //get spesific user
  async getUserAndPosts(vuexContext, user) {
    let userProfile = await axios.get(
      `http://localhost:5000/api/posts/${user}`
    );

   
      vuexContext.commit("setUserProfile",userProfile.data)
    return userProfile
  },
};
