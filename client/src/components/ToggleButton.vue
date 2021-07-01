<script>
export default {};
</script>
<template >
  <div class="onoffswitch">
    <input
      type="checkbox"
      name="onoffswitch"
      class="onoffswitch-checkbox"
      id="myonoffswitch"
      tabindex="0"
      checked
    />
    <label class="onoffswitch-label" for="myonoffswitch"> </label>
  </div>
</template>

<style >
.onoffswitch {
  position: relative;
  width: 147px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}
.onoffswitch-checkbox {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}
.onoffswitch-label {
  display: block;
  overflow: hidden;
  cursor: pointer;
  height: 32px;
  padding: 0;
  line-height: 32px;
  border: 2px solid #e3e3e3;
  border-radius: 32px;
  background-color: #ffffff;
  transition: background-color 0.3s ease-in;
  text-align: center;
}
.onoffswitch-label:before {
  content: "";
  display: block;
  width: 32px;
  margin: 0px;
  background: #ffffff;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 113px;
  border: 2px solid #e3e3e3;
  border-radius: 32px;
  transition: all 0.3s ease-in 0s;
}
.onoffswitch-checkbox:checked + .onoffswitch-label {
  background-color: #1da1f2;
}
.onoffswitch-checkbox:checked + .onoffswitch-label,
.onoffswitch-checkbox:checked + .onoffswitch-label:before {
  border-color: #1da1f2;
}
.onoffswitch-checkbox:checked + .onoffswitch-label:before {
  right: 0px;
}
</style>