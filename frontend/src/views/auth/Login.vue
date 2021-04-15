
   <script>
export default {
  name: "Register",
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
     login() {
       this.$store.dispatch("loginEmailAndPassword", this.user);
    },
  },
  computed: {
    errors() {
      return this.$store.getters.getLoginErrors;
    },
  },
  created() {
    console.log(this.$store.getters.getAuthState,"created");
  },
};
</script>
   
    <template>
  <div class="login-page">
    <h3 class="form-header">Login</h3>
    <div class="form-section">
      <form class="form">
        <div class="input-content">
          <label class="form-label">email</label>
          <input
            class="form-input"
            :style="{ borderColor: errors.email ? '#dc3545' : '#bfc7c7' }"
            placeholder="email"
            type="text"
            v-model="user.email"
          />
          <h1 class="error">{{ errors.email }}</h1>
        </div>
        <div class="input-content">
          <label class="form-label">password</label>
          <input
            class="form-input"
            :style="{ borderColor: errors.password ? '#dc3545' : '#bfc7c7' }"
            placeholder="password"
            type="password"
            v-model="user.password"
          />
          <h1 class="error">{{ errors.password }}</h1>
        </div>
      </form>
      <button class="form-button" @click="login">Login</button>
    </div>
    <div class="form-link">
      <span>Would you like to register?</span>
      <router-link to="/register" tag="a">Register</router-link>
    </div>
  </div>
</template>


<style scoped>
.error {
  color: red;
  font-weight: 400;
  font-size: 0.9rem;
}
.form-link {
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
  border: none;
  border-bottom: 1px solid var(--grey4);
  margin: 1rem 0;
  padding: 0 0.5rem;
  outline: none;
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
  border: 1px solid var(--grey4);
  border-radius: 5px;
  width: 25rem;
}
.login-page {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 3rem 0;
}
</style>
   