<script>
import Spinner from "vue-simple-spinner";

import SendPost from "../../components/SendPost";
import Post from "../../components/Post";

export default {
  data() {
    return {
      spinner: true,
    };
  },
  watch: {
    "$store.getters"() {
      console.log("nwe post");
    },
  },
  computed: {
    posts() {
      return this.$store.getters.getPosts;
    },
  },

  components: {
    Post,
    SendPost,
    Spinner,
  },
  async created() {
    await this.$store.dispatch("getAllPosts");
    this.spinner = false;
  },
};
</script>
<template >
  <div class="main-content">
    <div class="send-post">
      <SendPost />
    </div>
    <div class="all-posts">
      <div class="toggle"></div>
      <Spinner v-if="spinner" size="30"></Spinner>

      <Post
        v-else
        v-for="post in posts"
        :key="post._id"
        :post="post"
        class="post"
      />
    </div>
  </div>
</template>

<style scoped >
.toggle {
  margin: 1rem;
}
.image {
  height: 500px;
  width: 100%;
}
.all-posts {
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