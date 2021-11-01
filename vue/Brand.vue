<template>
  <div id="brand">
    <div id="gu-logo-bg">
      <div id="gu-logo"></div>
    </div>
    <div id="cdh-logo">
      Centre<br /><span class="cdh-logo-cursive">for </span>Digital
      <br />Humanities
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Clicker+Script&display=swap");

#cdh-logo {
  text-align: left;
  font-weight: 100;
  font-style: normal;
  font-size: 50px;
  line-height: 0.8;
  font-family: "Barlow Condensed", sans-serif;
}

#cdh-logo .cdh-logo-cursive {
  font-family: "Clicker Script", cursive;
  font-size: 30px;
  vertical-align: 40%;
}

#brand #cdh-logo {
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
