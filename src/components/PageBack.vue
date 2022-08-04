<template>
  <div class="page-back">
    <a v-if="href != null" :href="href" class="page-back-button">
      <div class="square"></div>
    </a>

    <router-link v-else-if="to != null" :to="to" class="page-back-button">
      <div class="square"></div>
    </router-link>

    <div v-else @click="back()" class="page-back-button">
      <div class="square"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageBack",
  props: ["href", "to"],
  methods: {
    back() {
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
  /* For padding, `%` means % of the width. */
  padding-top: 100%;
}

.page-back-button {
  display: block;
  width: 3rem;
  margin: 0.2rem;
  border-radius: 50%;
  background: url(../assets/back-black.svg) center/60% no-repeat;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.page-back-button:hover {
  background-color: rgba(245 245 245 / 60%);
}
</style>
