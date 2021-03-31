export default {
  setCurrentUserInfo(state, currentUserInfo) {
    state.currentUserInfo = { ...currentUserInfo };
  },
  setPosts(state, posts) {
    state.posts.push(posts);
    state.posts.sort((a,b) => {
      return b.createdAt.toDate().getTime() - a.createdAt.toDate().getTime()
    });
  },
};
