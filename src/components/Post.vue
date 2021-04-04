<template>
  <div class="post">
    <!--  <div>{{ post.userName }}--{{ post.postId }}</div>
    <p>{{ post.textContent }}</p>
    <div>{{ post.createdAt.toDate() }}</div> -->
    <div class="post-context">
      <div class="profile">
        <img
          src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
          alt=""
        />
      </div>
      <div class="context">
        <div class="user-info">
          <span class="username">{{ post.userName }}</span>
          <span class="share-time">{{ time }} {{ timeChar }}</span>
        </div>
        <div class="text">
          <p>
            {{ post.textContent }}
          </p>
        </div>
      </div>
    </div>
    <div class="post-icons">
      <div>
        <span class="material-icons">repeat </span>
      </div>
      <div><span class="material-icons">favorite_border</span></div>
    </div>
  </div>
</template>
<script scoped>
export default {
  data() {
    return {
      timeChar: "d",
      time: 88888,
    };
  },
  created() {
   setTimeout(() => {
      this.getPosts()
   },4000)
  },
  methods: {
    getPosts() {
      let vm = this;

      let nowMonth = new Date().getMonth();
      let lastMonth = this.post.createdAt.toDate().getMonth();
      let month = nowMonth - lastMonth;
      if (month > 0) {
        vm.timeChar = "M";
        this.time = month;
        return
      }

      let nowDay = new Date().getDay();
      let lastDay = this.post.createdAt.toDate().getDay();
      let day = nowDay - lastDay;
      if (month <= 0 && day > 0) {
        vm.timeChar = "d";
        this.time = day;
        return
      }

      let nowHour = new Date().getHours();
      let lastHour = this.post.createdAt.toDate().getHours();
      let hour = nowHour - lastHour;

      if (day <= 0 && hour > 0) {
        vm.timeChar = "h";
        this.time = hour;
        return
      }

      let nowMin = new Date().getMinutes();
      let lastMin = this.post.createdAt.toDate().getMinutes();
      let min = nowMin - lastMin;
      if (hour <= 0 && min > 0) {
        vm.timeChar = "m";
        this.time = min;
        return
      }

      let nowSec = new Date().getSeconds();
      let lastSec = this.post.createdAt.toDate().getSeconds();
      let second = nowSec - lastSec;
      if (min <= 0 && second > 0) {
        vm.timeChar = "s";
        this.time = second;
        return
      } else {
        this.time = 9999999;
        return
      }
    },
  },

  props: {
    post: Object,
  },
};
</script>
<style >
.share-time {
  margin-left: 1rem;
  color: var(--grey5);
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
.user-info {
  margin-bottom: 0.5rem;
}
.username {
  font-weight: 600;
}
.context {
  padding: 0 1rem;
  min-height: 100%;
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
}
.post {
  background-color: var(--grey1);
  min-width: 100%;
  padding: 1rem 1rem 0.2rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>