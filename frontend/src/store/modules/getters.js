export default {
  getErrors(state) {
    return state.errors;
  },
  getLoginErrors(state) {
    return state.loginErrors;
  },
  getToken(state) {
    return state.token;
  },
  getUser(state) {
    return state.user;
  },
  getAuthState(state) {
    return state.authState;
  },
  getPosts(state) {
    return state.posts;
  },
  getimageSrc(state) {
    return state.imageSrc;
  },
  getUserProfile(state) {
    
    return state.userProfile;
  },
  getIsFollow(state){
   
    return state.isFollow
  },
  getLikes(state){
    return state.posts
  },
  getSearchUsers(state){
    return state.searchUsers
  },
};
