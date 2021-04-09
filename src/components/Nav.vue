<template >
  <div class="left-nav">
    <ul class="link-list">
      <li class="list-item">
        <router-link class="icon" tag="a" to="/"
          ><span class="material-icons fire-icon">
            local_fire_department
          </span></router-link
        >
      </li>
      <li class="list-item">
        <router-link class="link-item" tag="a" to="/">
          <span class="material-icons item-icons">home</span>
          <span class="link-text">Home</span></router-link
        >
      </li>
      <li class="list-item">
        <router-link class="link-item" tag="a" to="/notifications">
          <span class="material-icons item-icons"> notifications </span>
          <span class="link-text">Notifications</span></router-link
        >
      </li>
      <li class="list-item">
        <router-link class="link-item" tag="a" to="/messages">
          <span class="material-icons item-icons">email</span>
          <span class="link-text">Messages</span></router-link
        >
      </li>
      <li class="list-item">
        <router-link class="link-item" tag="a" to="/profile">
          <span class="material-icons item-icons">person</span>
          <span class="link-text">Profile</span></router-link
        >
      </li>
      <li class="tweet-button">
       <button>
         Tweet
       </button>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  methods: {
    async logout() {
      await this.$store.dispatch("logout");
      this.$router.push("/login");
    },
    goProfile() {
      let id = this.$store.getters.getCurrentUserInfo.id;
      this.$router.push(`/user/${id}`);
    },
  },
};
</script>

<style  scoped>
.tweet-button button{
  margin: .5rem 0 0 1rem;
  width: 100%;
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
.tweet-button{
    min-height: 3.5rem;
  display: flex;
  align-items: center;
  padding: 0 1rem 0 0;
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
  width: 17rem;
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
}
</style>