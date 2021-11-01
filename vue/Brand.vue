<template>
  <div id="brand">
    <div id="gu-logo-bg">
      <div id="gu-logo"></div>
    </div>
    <CdhLogo />
  </div>
</template>

<script>
import CdhLogo from "./CdhLogo.vue";

export default {
  name: "Brand",
  components: {
    CdhLogo,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Clicker+Script&display=swap");

#brand .cdh-logo {
  padding: 30px 0px 10px 0px;
}

#gu-logo-bg {
  float: right;
  height: 165px;
  width: 155px;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0.8) 100%
  );
  border-radius: 0px 0px 5px 5px;
}

#gu-logo {
  width: 155px;
  height: 185px;
  padding: 15px 0 0 0;
  background: url(../graphics/interface/gu_logo.png);
  background-size: 125px 95px;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
