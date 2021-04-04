<template >
  <div class="home">
    <nav class="nav-bar">
      <Nav />
    </nav>
    <div class="main-content">
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
      <div class="all-posts">
        <Post class="post" v-for="(post, i) in posts" :key="i" :post="post" />
      </div>
    </div>
    <div class="chat-section"></div>
  </div>
</template>
<script>
import Nav from "../../components/Nav";
import Post from "../../components/Post";
export default {
  components: {
    Nav,
    Post,
  },
  data() {
    return {
      post: {
        content: "",
      },
      friendId: "",
    };
  },
  methods: {
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
<style scoped >
 .all-posts > .post:nth-child(n){
  border-bottom: 1px solid var(--grey4);
}

.main-content {
  padding: 1rem 0;
  background-color: var(--grey2);
}
.chat-section {
   position: relative;
  width: 25rem;
  background-color: var(--grey6);
}
.nav-bar {
  position: relative;
  width: 17rem;
  background-color: var(--grey6);
}
.home {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 17rem 1fr 25rem;
}
</style>