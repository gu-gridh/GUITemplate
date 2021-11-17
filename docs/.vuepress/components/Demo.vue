<template>
  <div class="demo">
    <component :is="componentName" />
  </div>
</template>

<script>
export default {
  props: {
    componentName: { type: String, required: true },
  },
};
</script>

<style>
.demo {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1rem;
}
</style>
