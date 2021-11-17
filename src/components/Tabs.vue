<template>
  <div class="tab-container">
    <div
      v-for="option in options"
      :key="option"
      class="tab-button"
      :class="{ 'tab-selected': option === selected }"
      @click="$emit('change', option)"
    >
      {{ option }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Tabs",
  props: ["options", "selected"],
};
</script>

<style>
.tab-container {
  display: flex;
  font-size: 22px;
}

.tab-button {
  padding: 5px 15px;
  border-radius: 10px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
}

.tab-button + .tab-button {
  margin-left: 8px;
}

.tab-button:hover {
  background-color: white;
}

.tab-selected {
  color: #0099cc;
  font-weight: 300;
  background-color: white;
}
</style>
