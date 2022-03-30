<template>
  <div class="cdh-body">
    <slot />
  </div>
</template>

<script>
// Add this component once to your app to include the basic styles.
// Either put all content inside it, or add `class="cdh-body"` to the `<body>` element.
import "./../assets/css/base.css";

export default {
  name: "CdhBody",
};
</script>
