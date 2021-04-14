<script >
export default {
  data() {
    return {
      commentBg: false,
      favBg: false,
      repBg: false,
    };
  },
  methods: {
    formatDate(date) {
      var d = new Date(date),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();

      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;

      return [year, month, day].join("-");
    },
  },
  props: {
    post: Object,
  },
};
</script>
<template>
  <div class="post">
    <div class="post-context">
      <router-link class="profile" tag="div" :to="post.userName">
        <img
          src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
          alt=""
        />
      </router-link>
      <div class="context">
        <div class="user-info">
          <router-link class="username" tag="span" :to="post.userName" >
            {{post.userName}}
          </router-link>
          <span class="share-time">{{
            formatDate(post.createdAt.toDate())
          }}</span>
        </div>
        <div class="text">
          <p>
            {{ post.textContent }}
          </p>
        </div>
      </div>
    </div>
    <div class="post-icons">
      <div @click="commentBg = !commentBg">
        <span
          :style="{ color: commentBg ? 'lightblue' : '' }"
          class="material-icons"
        >
          <span class="material-icons-outlined"> chat_bubble_outline </span>
        </span>
      </div>
      <div @click="repBg = !repBg">
        <span :style="{ color: repBg ? 'green' : '' }" class="material-icons"
          >repeat
        </span>
      </div>
      <div @click="favBg = !favBg">
        <span v-if="!favBg" class="material-icons">favorite_border</span>
        <span v-if="favBg" :style="{ color: 'red' }" class="material-icons"
          >favorite</span
        >
      </div>
    </div>
  </div>
</template>

<style scoped >
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