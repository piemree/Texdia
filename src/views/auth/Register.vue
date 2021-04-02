<template>
  <div class="register-page">
    <h3 class="form-header">REGISTER</h3>
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
      <button class="form-button" @click="register">Register</button>
    </div>
   <div class="form-link">
     <span>Do you have an account?</span>
      <router-link to="/login" tag="a">Login</router-link>
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
.form-link{
  margin-top: 1rem;
}
.form-button {
  width: 8rem;
  height: 3rem;
  color: #fff;
  background-color: #515454;
  border-radius: 0.5rem;
  outline: none;
  box-shadow: none;
  border: none;
  cursor: pointer;
}
.form-header {
  margin-bottom: 1rem;
  font-size: 2rem;
}
.form-input {
  height: 2rem;
  width: 90%;
  border-radius: 5px;
  margin: 1rem 0;
  padding: 0 0.5rem;
  border: none;
}
.input-content {
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  width: 100%;
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
  display: flex;
  flex-direction: column;
  padding: 1rem 1rem;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #8e9494;
  border-radius: 5px;
  width: 25rem;
}
.register-page {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 3rem 0;
}
</style>