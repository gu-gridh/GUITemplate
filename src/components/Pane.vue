<template>
  <section>
    <slot />
  </section>
</template>

<script>
export default {
  name: "Pane",
};
</script>

<style scoped>
section {
  background-color: rgb(245, 245, 245);
  border-radius: 5px;
  margin-bottom: 40px;
}
</style>
