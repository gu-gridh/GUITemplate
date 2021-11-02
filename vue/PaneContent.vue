<template>
  <div class="pane-content">
    <slot />
  </div>
</template>

<script>
export default {
  name: "PaneContent",
};
</script>

<style>
.pane-content {
  padding: 15px 30px;
}

.pane-content > :first-child {
  margin-top: 0;
}

.pane-content > :last-child {
  margin-bottom: 0;
}
</style>
