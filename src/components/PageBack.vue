<template>
  <div class="page-back">
    <div class="square">
      <a v-if="href != null" :href="href" class="page-back-button" />
      <router-link v-else-if="to != null" :to="to" class="page-back-button" />
      <div v-else @click="back()" class="page-back-button" />
    </div>
  </div>
</template>

<script>
export default {
  name: "PageBack",
  props: ["href", "to"],
  methods: {
    back() {
      console.log(window.history);
      window.history.back();
    },
  },
};
</script>

<style>
.page-back {
  float: left;
  /* Compensate for the Container margin and occupy it. */
  margin-left: calc(-100% / 0.85 * 0.15 / 2);
  width: calc(100% / 0.85 * 0.15 / 2);
  padding-top: 0.2rem;
  display: flex;
  justify-content: center;
}

.square {
  width: 100%;
  padding-top: 100%;
  position: relative;
}
.square > * {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.page-back-button {
  display: block;
  max-width: 3rem;
  margin: 0.2rem;
  /* height: 2rem;
  width: 2rem; */
  border-radius: 50%;
  background: url(../assets/back-black.svg);
  background-size: 60%;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.page-back-button:hover {
  background-color: rgba(245 245 245 / 60%);
}
</style>
