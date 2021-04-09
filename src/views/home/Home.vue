<template >
  <div class="main-content">
 <!--    <div class="search">
      <div class="search-content">
        <input
          class="search-input"
          placeholder="Search User"
          v-model="friendId"
          type="text"
        />
      </div>
    </div> -->
    <div class="send-post">
      <SendPost />
    </div>
    <div class="all-posts">
      <Post class="post" v-for="(post, i) in posts" :key="i" :post="post" />
    </div>
  </div>
</template>
<script>
import SendPost from "../../components/SendPost";
import Post from "../../components/Post";
export default {
  components: {
    Post,
    SendPost,
  },
  data() {
    return {
      friendId: "",
    };
  },
  methods: {
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

.search-content {
  width: 100%;
  height: 100%;
  position: relative;
}
.search {
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.search-content::before {
  font-family: "Material Icons";
  content: "search";
  display: block;
  position: absolute;
  top: 30%;
  right: 1rem;
  z-index: 10;
  height: 1rem;
  width: 1rem;
  font-size: 1.5rem;
  color: var(--grey5);
}
.search-input {
  padding: 0 2rem 0 0.5rem;
  width: 100%;
  height: 100%;
  outline: none;
  font-size: 1rem;
  border-radius: 10px;
  border: 1px solid var(--grey4);
  position: relative;
  background-color: var(--grey1);
}
.search-input:focus {
  border: 1px solid var(--grey5);
}

.all-posts{
  width: 100%;
}
.all-posts > .post:nth-child(n) {
  border-bottom: 1px solid var(--grey2);
    background-color: var(--grey1);
 
}

.main-content {
  padding: 1rem 0;
  background-color: var(--grey1);
  width: 100%;
}
</style>