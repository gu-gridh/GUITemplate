<template>
  <div class="row-controls-section">
    <slot />
  </div>
</template>

<script>
export default {
  name: "ControlsSection",
};
</script>

<style>
.row-controls-section {
  display: flex;
  flex-wrap: wrap;
}
</style>
