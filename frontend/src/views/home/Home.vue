<script>
import SendPost from "../../components/SendPost";
import Post from "../../components/Post";
export default {
  components: {
    Post,
    SendPost,
  },
};
</script>
<template >
  <div class="main-content">
    <div class="send-post">
      <SendPost />
    </div>
    <div class="all-posts">
      <Post class="post" />
    </div>
  </div>
</template>

<style scoped >
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