<template>
  <div class="button-list">
    <div class="button-list-inner">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "ButtonList",
};
</script>

<style>
.button-list-inner {
  display: inline-flex;
  flex-direction: column;
}
</style>
