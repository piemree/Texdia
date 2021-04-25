export default {
  setErrors(state, errors) {
    state.errors = errors;
  },
  setLoginErrors(state, loginErrors) {
    state.loginErrors = Object.assign(state.loginErrors, loginErrors);
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
    state.posts = [];
    posts.map((post) => {
      state.posts.push(post);
    });
  },
  setUserProfile(state, userProfile) {
    state.userProfile = userProfile;
  },
  setUserProfileInfo(state, userProfile) {
    state.userProfile.user = userProfile;
  },
  setIsFollow(state, isFollow) {
    state.isFollow = isFollow;
  },

  updatePost(state, data) {
    if (state.posts) {
      let index = state.posts.findIndex((el) => {
        return data.post._id === el._id;
      });

      if (index !== -1) {
        let newPost = { ...data.post, isLiked: data.isLiked };
        state.posts[index] = Object.assign(state.posts[index], newPost);
      }
    }
  },
  updateProfilePosts(state, data) {
    if (state.userProfile.posts) {
      let index = state.userProfile.posts.findIndex((el) => {
        return data.post._id === el._id;
      });
      if (index !== -1) {
        let newPost = { ...data.post, isLiked: data.isLiked };
        state.userProfile.posts[index] = Object.assign(
          state.userProfile.posts[index],
          newPost
        );
      }
    }
  },
  updateSearchUsers(state, data){
    state.searchUsers = [];
    data.map((user) => {
      state.searchUsers.push(user);
    });
  }
};
