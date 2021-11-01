<template>
  <div class="row">
    <slot />
  </div>
</template>

<script>
export default {
  name: "Row",
};
</script>

<style>
.row {
  margin-block: 20px;
}
</style>
