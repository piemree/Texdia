<template >
  <div class="home">
    <h1>Merhaba {{ currentUser.firstName }}</h1>
    <button @click="signOut">Sign out</button>
    <div>
      <label>add friend</label>
      <input v-model="friendId" type="text" />
      <button @click="addFriend">Add</button>
    </div>
    <form @submit.prevent="submitPost">
      <div>
        <textarea v-model="post.content" cols="30" rows="10"></textarea>
        <button type="submit">send</button>
      </div>
    </form>

    <div v-for="(post, i) in posts" :key="i">
      <div>{{ post.userName }}--{{ post.postId }}</div>
      <p>{{ post.textContent }}</p>
      <div>{{ post.createdAt.toDate() }}</div>
      <hr />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      post: {
        content: "",
      },
      friendId: "",
    };
  },
  methods: {
    async signOut() {
      await this.$store.dispatch("logout");

      this.$router.push("/login");
    },
    async submitPost() {
      await this.$store.dispatch("sendPost", this.post);
      this.post.content = "";
    },
    addFriend() {
      this.$store.dispatch("addFriend", this.friendId);
    },
  },
  async created() {
    await this.$store.dispatch("getUserProfileInfo");
    await this.$store.dispatch("getPosts");
  },

  computed: {
    currentUser() {
      return this.$store.getters.getCurrentUserInfo;
    },
    posts() {
      return this.$store.getters.getPosts;
    },
  },
};
</script>
<style >
h1 {
  font-size: 2rem;
}
.home {
  width: 100%;
  height: 100vh;
}
</style>