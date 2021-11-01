<template>
  <div class="switch">
    <div
      v-for="option in options"
      :key="option"
      class="switch-button"
      :class="{ 'switch-button-selected': option === selected }"
      @click="selected = option"
    >
      {{ option }}
    </div>
  </div>
</template>

<script>
export default {
  name: "SwitchButton",
  props: ["options"],
  data: () => ({
    selected: 0,
  }),
  created() {
    this.selected = this.options[0];
  },
};
</script>

<style>
.switch {
  display: flex;
  font-size: 18px;
  cursor: pointer;
  border-radius: 5px;
  border-style: solid;
  border-width: 1.5px;
  border-color: rgb(208, 208, 208);
  background-color: rgb(220, 220, 220);
  box-shadow: inset 2px 2px 20px rgba(0, 0, 0, 0.1);
}

.switch-button {
  padding: 5px 15px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
}

.switch-button:hover {
  box-shadow: inset 2px 2px 20px rgba(0, 0, 0, 0.05);
}

.switch-button-selected {
  color: #0099cc;
  font-weight: 300;
  background-color: white;
  border-radius: 5px 5px 5px 5px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.15);
}
</style>
