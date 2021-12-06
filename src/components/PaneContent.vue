<template>
  <div class="pane-content">
    <div v-if="title || $slots.title" class="pane-title">
      {{ title }}
      <slot name="title" />
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  name: "PaneContent",
  props: ["title"],
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

.pane-title {
  margin-bottom: 30px;
  font-size: 24px;
  color: #0099cc;
}
</style>
