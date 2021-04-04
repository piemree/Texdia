<template>
  <form @submit.prevent="submitPost">
    <div class="create-post">
      <div class="post-context">
        <div class="profile">
          <img
            src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
            alt=""
          />
        </div>
        <div class="context">
          <div class="text">
            <textarea
            cols="55"
              placeholder="What's happening?"
              class="post-input"
            ></textarea>
          </div>
        </div>
      </div>
      <div class="post-bottom">
        <div class="icons">
          <span class="material-icons">repeat </span>
        </div>
        <div>
          <button class="submit">Send</button>
        </div>
      </div>
    </div>
  </form>
</template>
<script>
export default {
  data() {
    return {
      post: {
        content: "",
      },
    };
  },
  methods: {
    async submitPost() {
      await this.$store.dispatch("sendPost", this.post);
      this.post.content = "";
    },
  },
};
</script>
<style scoped>
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
.post-input {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  min-width: 100%;
  resize: vertical;
  display: block;
  max-width: 100%;
  line-height: 1.5;
  padding: 15px 15px 30px;
  border: none;
  outline: none;
  margin-left: 1rem;
}
.post-input:focus {
  border-bottom: 1px solid var(--grey5);
}
.post-bottom {
  display: flex;
  margin-top: 1rem;
  justify-content: space-between;
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
  padding: 1rem;
}

.profile img {
  flex-shrink: 0;
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