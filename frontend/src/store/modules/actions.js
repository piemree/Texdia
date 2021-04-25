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
    vuexContext.commit("setUser", {});
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
      vuexContext.dispatch("likeController", posts.data);
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

    vuexContext.dispatch("likeController", userProfile.data.posts);
    vuexContext.commit("setUserProfile", userProfile.data);
    vuexContext.commit("setIsFollow", userProfile.data.isFollow);
    return userProfile;
  },

  async followUser(vuexContext, id) {
    let response = await axios.post("http://localhost:5000/api/users/follow", {
      id,
    });

    let following = response.data.isFollow;
    vuexContext.commit("setUserProfileInfo", response.data.profile);

    vuexContext.commit("setIsFollow", following);
  },
  async unfollowUser(vuexContext, id) {
    let response = await axios.post(
      "http://localhost:5000/api/users/unfollow",
      {
        id,
      }
    );

    let following = response.data.isFollow;
    vuexContext.commit("setUserProfileInfo", response.data.profile);

    vuexContext.commit("setIsFollow", following);
  },

  async likePost(vuexContext, postId) {
    let response = await axios.post(`http://localhost:5000/api/posts/like`, {
      id: postId,
    });

    vuexContext.commit("updatePost", response.data);
    vuexContext.commit("updateProfilePosts", response.data);
  },
  async unlikePost(vuexContext, postId) {
    let response = await axios.post(`http://localhost:5000/api/posts/unlike`, {
      id: postId,
    });

    vuexContext.commit("updatePost", response.data);
    vuexContext.commit("updateProfilePosts", response.data);
  },

  async searchUsers(vuexContext, key) {
    let result = await axios.post("http://localhost:5000/api/users/search", {
      key,
    });
console.log(result.data);
    vuexContext.commit("updateSearchUsers", result.data);
  },

  likeController(vuexContext, posts) {
    let currentUser = vuexContext.getters.getUser._id;
    posts.map((post) => {
      let isLiked = post.likes.some((user) => user === currentUser);

      post.isLiked = isLiked;
    });
  },
};
