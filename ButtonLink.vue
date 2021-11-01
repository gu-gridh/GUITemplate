<template>
  <div class="button-container">
    <div :class="`button-icon button-icon-${icon}`"></div>
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
  background-image: url(graphics/interface/linkbutton.png);
}

.button-icon-back {
  background-image: url(graphics/interface/backbutton.png);
}

.button-icon-add {
  background-image: url(graphics/interface/plusbutton.png);
}

.button-icon-download {
  background-image: url(graphics/interface/downloadbutton.png);
}
</style>
