<script>
import Nav from "../components/Nav";
import RightNav from "../components/RightNav";
import MainHeader from "../components/MainHeader";
export default {
  name: "index",
  components: {
    Nav,
    MainHeader,
    RightNav,
  },
};
</script>
<template>
  <div id="main">
    <nav class="nav-bar">
      <Nav />
    </nav>
    <div class="app-main-content">
      <MainHeader />
      <router-view></router-view>
    </div>
    <nav class="search-section">
      <RightNav />
    </nav>
  </div>
</template>

<style >
.search-section {
  position: sticky;
  top: 0;
  right: 0;
  max-width: 100%;
  min-width: 8rem;
  width: 100%;
  height: 100vh;
  grid-column-start: 3;
  grid-column-end: 4;
}
.nav-bar {
  position: sticky;
  top: 0;
  left: 0;
  max-width: 100%;
  min-width: 8rem;
  width: 100%;
  height: 100vh;
  grid-column-start: 1;
  grid-column-end: 2;
}
.app-main-content {
  position: relative;
  width: 100%;
  min-width: 623px;
  grid-column-start: 2;
  grid-column-end: 3;
  padding: 1rem;
  border-left: 1px solid var(--grey2);
  border-right: 1px solid var(--grey2);
}

#main {
  display: grid;
  grid-template-columns: 1.5fr 3fr 2fr;
  background-color: var(--grey1);
  min-height: 100vh;
  
  height: 100vh;
  max-width: 100%;
  grid-gap: 3rem;
}
</style>