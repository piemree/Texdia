<script>
export default {
  data() {
    return {
      pathName: "",
    };
  },
  watch: {
    $route() {
      let path = (this.pathName = window.location.pathname);
      this.pathName = path.substr(path.lastIndexOf("/") + 1);
    },
  },
  created() {
     let path = (this.pathName = window.location.pathname);
      this.pathName = path.substr(path.lastIndexOf("/") + 1);
  },
};
</script>
<template>
  <div class="header">
    <h2 class="title">{{ pathName }}</h2>
  </div>
</template>

<style >
.title {
  font-size: 1.7rem;
  font-weight: 900;
}
.header {
  max-width: 100%;
  height: 4rem;
  border-bottom: 1px solid var(--grey2);
  display: flex;
  position: sticky;
  top: 0;
  align-items: center;
  justify-content: flex-start;
  padding: 0 1rem;
  background-color: #fff;
  z-index: 100;
}
</style>