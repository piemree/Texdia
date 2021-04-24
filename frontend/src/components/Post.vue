<script>
export default {
  data() {
    return {
      options: {
        year: "numeric",
        weekday: "long",
        day: "numeric",
        month: "long",
        hour: "numeric",
        minute: "numeric",
      },
     
    };
  },
  
  methods: {
  
    likePost(){
      this.$store.dispatch("likePost",this.post._id)
    },
    unlikePost(){
      this.$store.dispatch("unlikePost",this.post._id)
    },
  },
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>
<template>
  <div class="post">
    <div class="post-context">
      <router-link class="profile" tag="div" to="/">
        <img :src="post.user.picture" alt="profile" />
      </router-link>
      <div class="context">
        <div class="user-info">
          <router-link
            class="username"
            tag="span"
            :to="`/profile/${post.user.login}`"
          >
            {{ post.user.login }}
          </router-link>
          <span class="share-time">{{
            new Date(post.createdAt).toLocaleString("en-US", options)
          }}</span>
        </div>
        <div class="text">
          <p>
            {{ post.text }}
          </p>
        </div>
      </div>
    </div>
    <div class="post-icons">
      <div>
        <span  class="material-icons">
          <span class="material-icons-outlined"> chat_bubble_outline </span>
        </span>
      </div>
      <div>
        <span class="material-icons">repeat </span>
      </div>
      <div>
        <span v-if="post.isLiked" @click="unlikePost"  class="material-icons btn-unlike">favorite</span>
        <span v-else @click="likePost" class="material-icons">favorite_border</span>
       <span>{{post.likes.length}}</span>
      </div>
    </div>
  </div>
</template>

<style scoped >
.btn-unlike {
  color: red !important;
}
.text {
  margin: 1rem 0;
}
.material-icons {
  cursor: pointer;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */

  color: var(--grey5);
}
.share-time {
  display: block;
  font-size: 12px;
  color: var(--grey5);
}
.profile img {
  flex-shrink: 1;
  min-width: 100%;
  min-height: 100%;
}
.profile {
  background-color: rgb(0, 0, 0);
  min-width: 2.5rem;
  min-height: 2.5rem;
  max-width: 2.5rem;
  max-height: 2.5rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
}
.user-info {
  margin-bottom: 0.5rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.username {
  display: block;
  font-weight: 600;
  cursor: pointer;
}
.context {
  padding: 0 1rem;
  min-height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
.post-context {
  margin-bottom: 1rem;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}
.post-icons {
  display: flex;
  width: 100%;
  justify-content: space-around;
  font-weight: 400;
}
.post {
  width: 100%;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>