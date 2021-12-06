<template>
  <div class="go-link" @click="$emit('click')">
    <slot />
    <div class="icon"></div>
  </div>
</template>

<script>
export default {
  name: "GoLink",
};
</script>

<style scoped>
.go-link {
  display: inline-block;
  font-size: 20px;
}

.icon {
  display: inline-block;
  background-image: url(../assets/link-arrow-black.png);
  height: 15px;
  width: 15px;
  background-size: 15px;
  margin-left: 0.2em;
  vertical-align: middle;
}
</style>
