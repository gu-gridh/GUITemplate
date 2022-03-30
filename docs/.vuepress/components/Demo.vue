<template>
  <CdhBody>
    <div class="demo">
      <component v-if="componentName" :is="componentName" />
      <slot />
    </div>
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
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1rem;
}
</style>
