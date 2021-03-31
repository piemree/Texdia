export default {
  isAuth(state) {
    return state.isLoggedIn;
  },
  getCurrentUserInfo(state){
    return state.currentUserInfo
  },
  getPosts(state){
    return state.posts
  }
};
