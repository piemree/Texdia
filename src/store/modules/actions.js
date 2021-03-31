import firebase from "firebase";
import Vue from "vue";
const db = firebase.firestore();
const auth = firebase.auth();
//const database=firebase.database().ref()
export default {
  setToken(vuexContext, token) {
    Vue.$cookies.set("token", token);
  },
  removeToken() {
    Vue.$cookies.remove("token");
  },
  async registerNewUser(vuexContext, newUser) {
    let user = {
      id: null,
      firstName: newUser.name,
      lastName: newUser.lastName,
      email: newUser.email,
      username: newUser.userName,
      createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
    };

    let response = await auth.createUserWithEmailAndPassword(
      newUser.email,
      newUser.password
    );
    user.id = response.user.uid;
    await db
      .collection("users")
      .doc(auth.currentUser.uid)
      .collection("profile")
      .add(user);

    let res = await db
      .collection("unique-usernames")
      .doc(auth.currentUser.uid)
      .set({
        username: newUser.userName,
      });

    return res;
  },

  async getUserProfileInfo(vuexContext) {
    const snapShot = await db
      .collection("users")
      .doc(auth.currentUser.uid)
      .collection("profile")
      .get();
    vuexContext.commit("setCurrentUserInfo", snapShot.docs[0].data());

    return snapShot;
  },
  async loginUserEmailAndPassword(vuexContext, loginInfo) {
    let response = await auth.signInWithEmailAndPassword(
      loginInfo.email,
      loginInfo.password
    );

    let token = response.user.refreshToken;
    vuexContext.dispatch("setToken", token);

    return response;
  },

  async sendPost(vuexContext, Post) {
    let post = {
      userId: auth.currentUser.uid,
      userName: vuexContext.getters.getCurrentUserInfo.username,
      textContent: Post.content,
      likes: "0",
      createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
    };
    let response = await db
      .collection("users")
      .doc(auth.currentUser.uid)
      .collection("posts")
      .doc()
      .set(post);

    return response;
  },
  async getPosts(vuexContext) {
    const userRef = await db
      .collection("users")
      .doc(auth.currentUser.uid)
      .collection("friends");
    const snapshot = await userRef.get();
    snapshot.forEach(async (doc) => {
      const friendRef = await db
        .collection("users")
        .doc(doc.data().id)
        .collection("posts");

      const friendPosts = await friendRef.get();

      friendPosts.docs.map((post) => {
        console.log(post.data());
        vuexContext.commit("setPosts", post.data());
      });
    });
  },
  async addFriend(vuexContext, friendId) {
    let response = await db
      .collection("users")
      .doc(auth.currentUser.uid)
      .collection("friends")
      .doc(friendId)
      .set({ id: friendId });
    return response;
  },
};
