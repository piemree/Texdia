
    <template>
  <div class="login-page">
    <div class="form-section">
      <form class="form">
        <div class="input-content">
          <label class="form-label">email</label>
          <input
            class="form-input"
            placeholder="email"
            type="email"
            v-model="user.email"
          />
        </div>
        <div class="input-content">
          <label class="form-label">password</label>
          <input
            class="form-input"
            placeholder="password"
            type="password"
            v-model="user.password"
          />
        </div>
      </form>
      <button @click="login">submit</button>
    </div>
  </div>
</template>

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
    async login() {
    await this.$store.dispatch("loginUserEmailAndPassword", this.user);
      alert("Successfully logged in");
      this.$router.push("/");
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
   