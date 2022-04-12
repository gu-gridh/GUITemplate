<template>
  <div class="long-text" :class="[mode && `mode-${mode}`]">
    <slot />
  </div>
</template>

<script>
export default {
  name: "LongText",
  props: {
    mode: {
      type: String,
      validator: (x) => !x || ["margin", "indent"].includes(x),
    },
  },
};
</script>

<style scoped>
.long-text {
  text-align: justify;
  columns: 2 20rem;
  column-gap: 2rem;
  widows: 2;
  orphans: 2;
}

.long-text.mode-margin p {
  margin-block: 1em;
}
.long-text.mode-margin p:first-child {
  margin-block-start: 0;
}
.long-text.mode-margin p:last-child {
  margin-block-end: 0;
}

.long-text.mode-indent p {
  margin-block: 0;
  text-indent: 1em;
}
.long-text.mode-indent p:first-child {
  text-indent: 0;
}
</style>
