<template>
  <div class="register-page">
    <div class="form-section">
      <form class="form">
        <div class="input-content">
          <label class="form-label">name</label>
          <input
            class="form-input"
            placeholder="name"
            type="text"
            v-model="newUser.name"
          />
        </div>
        <div class="input-content">
          <label class="form-label">lastname</label>
          <input
            class="form-input"
            placeholder="lastname"
            type="text"
            v-model="newUser.lastName"
          />
        </div>
        <div class="input-content">
          <label class="form-label">username</label>
          <input
            class="form-input"
            placeholder="username"
            type="text"
            v-model="newUser.userName"
          />
        </div>
        <div class="input-content">
          <label class="form-label">email</label>
          <input
            class="form-input"
            placeholder="email"
            type="email"
            v-model="newUser.email"
          />
        </div>
        <div class="input-content">
          <label class="form-label">password</label>
          <input
            class="form-input"
            placeholder="password"
            type="password"
            v-model="newUser.password"
          />
        </div>
        <div class="input-content">
          <label class="form-label">password-repeat</label>
          <input class="form-input" placeholder="password" type="password" />
        </div>
      </form>
      <button @click="register">submit</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "Register",
  data() {
    return {
      newUser: {
        name: "",
        lastName: "",
        userName: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async register() {

     await this.$store.dispatch('registerNewUser',this.newUser)
    
      this.$router.push("/login");
    },
  },
};
</script>
<style scoped>
.form-input {
  height: 2rem;
  width: 12rem;
  border-radius: 0;
  border: none;
}
.input-content {
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
}
.form {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
.form-section {
  margin-right: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: aqua;
  width: 20rem;
}
.register-page {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>