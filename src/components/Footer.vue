<template>
  <div id="foot" class="foot">
    <CdhLogo />
  </div>
</template>

<script>
import CdhLogo from "./CdhLogo";

export default {
  name: "Footer",
  components: { CdhLogo },
};
</script>

<style>
.foot {
  background-color: rgb(65, 65, 65);
  color: white;
  margin-top: 130px;
  padding: 20px 65px 30px;
  min-height: 120px;
}

.foot .cdh-logo {
  float: right;
}

@media screen and (max-width: 600px) {
  .foot .cdh-logo {
    display: none;
  }
}
</style>
