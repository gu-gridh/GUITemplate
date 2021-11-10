<template>
  <transition name="fade">
    <div v-show="show" class="modal-container" @click="hide">
      <div class="modal" @click.stop>
        <slot />
      </div>
    </div>
  </transition>
</template>

<script>
// Clicking away -> pop state -> emit hide event (-> parent component sets `show` prop to false)
// Browser back button -> pop state -> ...

export default {
  name: "Modal",
  props: {
    show: Boolean,
  },
  methods: {
    onPopstate() {
      this.$emit("hide");
    },
    hide() {
      window.history.back();
    },
  },
  watch: {
    show(show) {
      if (show) {
        window.history.pushState(null, "modal");
        window.addEventListener("popstate", this.onPopstate);
      } else {
        window.removeEventListener("popstate", this.onPopstate);
      }
    },
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
  padding: 1rem;
  box-sizing: border-box;
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
  max-height: 100%;
  max-width: 100%;
  border-radius: 10px;
  background-color: white;
  z-index: 101;
  box-shadow: 1px 10px 40px rgba(0, 0, 0, 0.3);
  overflow: auto;
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
  columns: 2 15em;
  column-gap: 40px;
  font-weight: 300;
}

@media screen and (min-width: 800px) {
  .modal-container {
    /* Thicker bottom padding to facilitate clicking away. */
    padding-bottom: 3rem;
  }

  .modal {
    width: 70%;
  }
}
</style>
