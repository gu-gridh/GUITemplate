<template>
  <div class="ButtonContainer" style="width:220px;">
    <div
      class="ButtonIcon"
      style=" background-image: url(graphics/interface/plusbutton.png);"
    />
    <div class="ButtonLabel" style="">Add something</div>
  </div>
</template>

<script></script>

<style>
.ButtonContainer {
  font-family: "Barlow Condensed", sans-serif;
  height: 30px;
  width: 200px;
  border-radius: 10px;
  padding: 8px;
  margin-top: 2px;
  margin-left: -10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.ButtonContainer:hover {
  background-color: rgb(255, 255, 255);
}

.ButtonIcon {
  float: left;
  margin-top: 0px;
  height: 30px;
  width: 30px;
  background-size: 30px 30px;
}

.ButtonLabel {
  float: left;
  font-size: 25px;

  margin-top: -2px;
  margin-left: 10px;
}
</style>
