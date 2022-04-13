<template>
  <footer>
    <slot>
      <CdhLogo />
    </slot>
  </footer>
</template>

<script>
import CdhLogo from "./CdhLogo.vue";

export default {
  name: "Footer",
  components: { CdhLogo },
};
</script>

<style scoped>
footer {
  background-color: rgb(65, 65, 65);
  color: white;
  margin-top: 130px;
  padding: 20px 65px 30px;
  min-height: 120px;
}

footer .cdh-logo {
  float: right;
}

@media screen and (max-width: 600px) {
  footer .cdh-logo {
    display: none;
  }
}
</style>
