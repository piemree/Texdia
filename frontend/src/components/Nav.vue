<script>
export default {
  data() {
    return {
      showUserInfo: false,
    };
  },
  computed: {
    user() {
      return this.$store.getters.getUser;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("logoutUser");
    },
  },
};
</script>
<template >
  <div class="left-nav">
    <ul class="link-list">
      <li class="list-item">
        <router-link class="icon" tag="a" to="/home"
          ><span class="material-icons fire-icon">
            local_fire_department
          </span></router-link
        >
      </li>
      <li class="list-item">
        <router-link class="link-item" tag="a" to="/home">
          <span class="material-icons item-icons">home</span>
          <span class="link-text">Home</span></router-link
        >
      </li>

      <li class="list-item">
        <router-link class="link-item" tag="a" :to="`/profile/${user.login}`">
          <span class="material-icons item-icons">person</span>
          <span class="link-text">Profile</span></router-link
        >
      </li>

      <li class="tweet-button">
        <button>Tweet</button>
      </li>
      <li @click="showUserInfo = !showUserInfo" class="list-item item-profile">
        <div class="link-item">
          <span class="profile"><img :src="user.picture" alt="picture" /></span>
          <div class="name-username">
            <div class="name">{{ user.login }}</div>
          </div>
        </div>
      </li>
      <div v-show="showUserInfo" class="user">
        <section class="infos">
          <div class="info-item">
            <button>Add an existing account</button>
          </div>
          <div class="info-item">
            <button @click="logout">Log out @{{ user.login }}</button>
          </div>
        </section>
      </div>
    </ul>
  </div>
</template>


<style  scoped>
@media only screen and (max-width: 1245px) {
  .link-text {
    display: none;
  }
  .name-username {
    display: none;
  }
  .item-profile {
    max-width: fit-content !important;
  }
  .link-list {
    align-items: center;
  }
}

.info-item button:hover {
  background-color: var(--grey2);
}
.info-item button {
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: inherit;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.infos {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.info-item {
  width: 100%;
  height: 3rem;
  border-top: 1px solid var(--grey4);
  display: flex;
  justify-content: center;
  align-items: center;
}
.user {
  margin-top: 0.5rem;
  width: 100%;
  height: 10rem;
  background-color: var(--grey1);
  border-radius: 1rem;
  box-shadow: 1px 1px 10px #999999;
}
.item-profile {
  width: 100% !important;
  position: relative;
}
.name-username .username {
  color: var(--grey5);
}
.name-username .name {
  font-weight: 900;
  font-size: 1rem;
}
.name-username {
  width: 100%;
  margin-left: 1rem;
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
  margin-left: 1rem;
}
.tweet-button button {
  margin: 1rem 0.5rem;
  min-width: 100%;
  height: 100%;
  background-color: rgb(29, 161, 242);
  color: #fff;
  font-weight: bold;
  border: none;
  outline: none;
  border-radius: 5rem;
  font-size: 1rem;
  cursor: pointer;
}
.tweet-button {
  min-height: 3.5rem;
  display: flex;
  width: 100%;
  align-items: center;
  padding: 0 1rem 0 0;
  margin: 1rem 0;
}
.fire-icon {
  font-size: 2rem;
  color: rgb(29, 161, 242);
}
.link-text {
  margin-left: 1rem;
  font-size: 1.3rem;
  font-weight: bold;
  color: black;
}
.list-item {
  min-height: 3.5rem;
  display: flex;
  align-items: center;
  padding: 0 1rem 0 0;
  width: fit-content;
  color: black;
  cursor: pointer;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.list-item:hover {
  border-radius: 2rem;
  background-color: rgba(29, 161, 242, 0.1);
}
.list-item:hover .item-icons {
  color: rgb(29, 161, 242);
}
.list-item:hover .link-text {
  color: rgb(29, 161, 242);
}
.link-item {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none !important;
}
.item-icons {
  font-size: 2rem;
  color: black;
}
.link-list {
  min-width: 100px;
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
}
.left-nav {
  background-color: inherit;
  max-width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  position: fixed;
  top: 0;
  left: 0;
}
</style>