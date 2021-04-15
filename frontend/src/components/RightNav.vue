<script>
export default {};
</script>
<template>
  <div class="right-nav">
    <div class="search">
      <div class="search-content">
        <input class="search-input" placeholder="Search User" type="text" />
      </div>
    </div>
  </div>
</template>

<style>
.search-content {
  width: 80%;
  height: 100%;
  position: relative;
  margin-top: 1rem;
}
.search {
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
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
  font-size: 1rem;
  border-radius: 10px;
  border: 1px solid var(--grey4);
  position: relative;
  background-color: var(--grey1);
}
.search-input:focus {
  border: 1px solid var(--grey5);
}
</style>