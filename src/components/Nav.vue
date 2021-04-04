<template >
  <div class="left-nav">
    <ul class="link-list">
      <li class="list-item">
        <router-link to="/profile" tag="button">
          <div class="pp">
            <img
              src=""
              alt="pp"
            />
          </div>
          <span class="item-text">profile</span></router-link
        >
      </li>
      <li class="list-item">
        <button @click="logout">
          <div class="icons">
            <span class="material-icons">logout</span>
          </div>
          <span class="item-text">logout</span>
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
  },
};
</script>
<style  scoped>

</style>