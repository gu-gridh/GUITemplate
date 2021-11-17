<template>
  <div class="row-controls">
    <slot />
  </div>
</template>

<script>
export default {
  name: "Controls",
};
</script>

<style>
.row-controls {
  margin: 10px -10px;
  display: flex;
  justify-content: space-between;
}
.row-controls > * {
  margin: 10px;
}
</style>
