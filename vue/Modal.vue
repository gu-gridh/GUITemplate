<template>
  <transition name="fade">
    <div class="modal-container" id="modal" @click="hideModal">
      <div class="modal" @click.stop>
        <slot />
      </div>
    </div>
  </transition>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "Modal",
  methods: {
    ...mapMutations(["hideModal"]),
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 500ms;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.modal-container {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
}

.modal {
  height: auto;
  width: 70%;
  border-radius: 10px;
  background-color: white;
  z-index: 101;
  box-shadow: 1px 10px 40px rgba(0, 0, 0, 0.3);
}

.article-title {
  padding: 20px 30px 0px 30px;
  font-size: 35px;
  text-align: left;
  font-weight: 300;
}

.article {
  padding: 30px;
  font-size: 20px;
  text-align: justify;
  column-count: 2;
  column-gap: 40px;
  font-weight: 300;
}

@media screen and (max-width: 1000px) {
  .article {
    column-count: 1;
  }
}
</style>
