<script>
export default {
  name: "error",
};
</script>
<template >
  <div class="error">
    <h1 class="message">Sorry, that page doesn’t exist!</h1>
    <div class="link"><router-link to="/">home</router-link></div>
  </div>
</template>

<style  scoped>
.error {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.message {
  font-size: 2rem;
  margin: 5rem 0 2rem 0;
}
</style>