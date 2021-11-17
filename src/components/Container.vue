<template>
  <div class="container">
    <slot />
  </div>
</template>

<script>
export default {
  name: "Container",
};
</script>

<style>
.container {
  width: 85%;
  margin-left: auto;
  margin-right: auto;
}
</style>
