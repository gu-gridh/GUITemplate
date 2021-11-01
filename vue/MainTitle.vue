<template>
  <div id="main-title">
    <slot />
  </div>
</template>

<script>
export default {
  name: "MainTitle",
};
</script>

<style>
#main-title {
  font-size: 90px;
  line-height: 0.8;
  padding: 40px 0px 0px 0px;
  margin-bottom: 30px;
}
</style>
