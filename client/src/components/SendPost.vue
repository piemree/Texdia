<script>
export default {
  data() {
    return {
      post: {
        text: "",
      },
    };
  },
  methods: {
    async submitPost() {
      await this.$store.dispatch("addPost", this.post.text);
    },
  },
  computed: {
    user() {
      return this.$store.getters.getUser;
    },
  },
};
</script>
<template>
  <form @submit.prevent="submitPost">
    <div class="create-post">
      <div class="post-context">
        <div class="profile">
          <img :src="user.picture" alt="picture" />
        </div>
        <div class="context">
          <div class="text">
            <textarea
              v-model="post.text"
              placeholder="What's Happend?"
              class="post-input"
            ></textarea>
          </div>
        </div>
      </div>
      <div class="post-bottom">
        <div>
          <button class="submit">Send</button>
        </div>
      </div>
    </div>
  </form>
</template>

<style scoped>
.context {
  min-width: 100%;
}
.text {
  min-width: 100%;
}
.post-input {
  margin-left: 1rem;
  min-width: 80%;
  padding: 1rem;
  height: 10rem;
  border: none;
  outline: none;
  overflow-y: hidden;
  overflow-x: hidden;
  background-color: rgb(248, 248, 248);
  resize: none;
}
.submit {
  width: 4rem;
  height: 2rem;
  color: #fff;
  background-color: #515454;
  border-radius: 0.5rem;
  outline: none;
  box-shadow: none;
  border: none;
  cursor: pointer;
}
.icons {
  margin-left: 3rem;
}

.post-bottom {
  display: flex;
  margin-top: 1rem;
  justify-content: flex-end;
}
.post-context {
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: flex-start;
}
.create-post {
  width: 100%;
  position: relative;
  background-color: var(--grey1);
  margin: 1rem 0;
  padding: 1rem 0;
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
}
</style>