<template>
  <div class="long-text">
    <slot />
  </div>
</template>

<script>
export default {
  name: "LongText",
};
</script>

<style scoped>
.long-text {
  text-align: justify;
  columns: 2 20rem;
  widows: 2;
  orphans: 2;
}
</style>
