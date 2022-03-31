<template>
  <div class="button-container" @click="$emit('click')">
    <div v-if="icon" :class="`button-icon button-icon-${icon}`"></div>
    <div class="button-label">{{ label }}</div>
  </div>
</template>

<script>
export default {
  name: "ButtonLink",
  props: ["icon", "label"],
};
</script>

<style>
.button-container {
  display: inline-block;
  font-size: 25px;
  height: 30px;
  min-width: 220px;
  border-radius: 10px;
  padding: 8px;
  margin-top: 2px;
  margin-left: -8px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.button-container:hover {
  background-color: rgb(255, 255, 255);
}

.button-icon {
  float: left;
  margin-top: 0px;
  height: 30px;
  width: 30px;
  background-size: 30px 30px;
}

.button-icon-link {
  background-image: url(../assets/linkbutton.svg);
}

.button-icon-back {
  background-image: url(../assets/backbutton.svg);
}

.button-icon-down {
  background-image: url(../assets/downbutton.svg);
}

.button-icon-left {
  background-image: url(../assets/back-black.svg);
}

.button-icon-right {
  background-image: url(../assets/link-arrow-black.svg);
}

.button-icon-add {
  background-image: url(../assets/plusbutton.svg);
}

.button-icon-info {
  background-image: url(../assets/infobutton.svg);
}

.button-icon-download {
  background-image: url(../assets/downloadbutton.svg);
}

.button-icon-pause {
  background-image: url(../assets/pausebutton.svg);
}

.button-icon-play {
  background-image: url(../assets/playbutton.svg);
}

.button-icon-search {
  background-image: url(../assets/searchbutton.svg);
}

.button-icon-searchcircle {
  background-image: url(../assets/searchcirclebutton.png);
}

.button-icon-eye {
  background-image: url(../assets/eyebutton.png);
}

.button-label {
  float: left;
  margin-top: -2px;
  margin-left: 10px;
}
</style>
