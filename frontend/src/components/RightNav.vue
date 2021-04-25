<script>
export default {
  data() {
    return {
      searchText: "",
      showSearchedUsers: false,
    };
  },
  watch: {
    searchText() {
      this.getUsers();
    },
  },
  methods: {
    getUsers() {
      this.showSearchedUsers = true;
      this.$store.dispatch("searchUsers", this.searchText);
    },
  },
  computed: {
    users() {
      return this.$store.getters.getSearchUsers;
    },
  },
};
</script>
<template>
  <div class="right-nav">
    <div class="search">
      <div class="search-content">
        <input
          @focus="getUsers"
          class="search-input"
          placeholder="Search User"
          type="text"
          v-model="searchText"
        />
      </div>
      <div v-show="showSearchedUsers" class="users">
        <ul class="search-section">
          <li v-for="user in users" :key="user._id">
            <div class="search-user">
              <router-link
                :to="`/profile/${user.login}`"
                tag="span"
                class="search-user"
              >
                <span class="profile"
                  ><img :src="user.picture" alt="picture"
                /></span>
                <span> {{ user.login }}</span>
              </router-link>
            </div>
          </li>
          <div class="close-icon">
           <button @click="showSearchedUsers = false">
              <span class="material-icons"> upgrade </span>
           </button>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.material-icons{
  font-size: 2rem;
  color: var(--grey5);
}
.close-icon button:hover .material-icons{
    color: var(--grey6);
}
.close-icon button{
  width: 100%;
  outline: none;
  border: none;
  cursor: pointer;
  background-color: #fff;
  
}
.close-icon {
  background: inherit;
  min-width: 100%;
  text-align: center;
  
}
.right-nav {
  position: fixed;
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
  margin-right: 1rem;
}
.users {
  min-width: 100%;
}
.search-user {
  width: 100%;
  height: 3rem;
  padding: 1rem 0.5rem;
  background-color: inherit;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  border-bottom: 1px solid var(--grey4);
}
.search-user:hover {
  background-color: var(--grey2);
}
.search-section {
  min-width: 100%;
  height: auto;
}
.search-content {
  min-width: 100%;
  min-height: 100%;
  position: relative;
  margin-top: 1rem;
}
.search {
  right: 50px;
  max-width: 80%;
  height: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.search-content::before {
  font-family: "Material Icons";
  content: "search";
  display: block;
  position: absolute;
  background-color: #fff;
  top: 30%;
  right: -1rem;
  z-index: 10;
  height: 70%;
  width: 1rem;
  font-size: 1.5rem;
  color: var(--grey5);
}
.search-input {
  width: 100%;
  padding: 0 1rem;
  height: 100%;
  outline: none;
  font-size: 1.5rem;
  border-radius: 0;

  border: none;

  border-bottom: 1px solid var(--grey4);
  position: relative;
  background-color: var(--grey1);
}
.search-input:focus {
  border-bottom: 1px solid var(--grey5);
}
</style>