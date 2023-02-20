<template>
  <div class="cdh-logo">
    Gothenburg Research Infrastructure<br /><span class="cdh-logo-cursive">in </span>Digital Humanities
    <br />
  </div>
</template>

<script>
import "typeface-clicker-script";

export default {
  name: "CdhLogo",
};
</script>

<style>
.cdh-logo {
  text-align: left;
  font-weight: 100;
  font-style: normal;
  /* Font size relative to parent */
  font-size: 2.5em;
  line-height: 0.8;
  font-family: "Barlow Condensed", sans-serif;
}

.cdh-logo .cdh-logo-cursive {
  font-family: "Clicker Script", cursive;
  font-size: 60%;
  vertical-align: 40%;
}
</style>
