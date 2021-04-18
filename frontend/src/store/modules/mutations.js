export default {
  setErrors(state, errors) {
    state.errors = errors;
  },
  setLoginErrors(state, loginErrors) {
    state.loginErrors = loginErrors;
  },
  setToken(state, token) {
    state.token = token;
  },
  setUser(state, user) {
    state.user = user;
  },
  isAuth(state, isAuth) {
    state.authState = isAuth;
  },
  clearPosts(state) {
    state.posts = [];
  },
  setPosts(state, posts) {
    posts.map((post) => {
      state.posts.push(post);
    });
  },
  setUserProfile(state, userProfile) {
    state.userProfile = userProfile;
  },
};
