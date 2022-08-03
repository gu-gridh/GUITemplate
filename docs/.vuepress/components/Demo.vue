<template>
  <CdhBody>
    <component v-if="componentName" :is="componentName" class="demo" />
  </CdhBody>
</template>

<script>
export default {
  props: {
    componentName: { type: String },
  },
};
</script>

<style>
.demo {
  padding: 1rem;
}
</style>
