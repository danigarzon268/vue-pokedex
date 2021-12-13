<template>
  <div>
    <div class="modal" v-show="showing"></div>
    <transition name="bounce">
      <div class="modal-body" v-show="showing">
        <div class="modal-content">
          <div class="close" @click="hide()" v-if="!noClose" ref="closeButton">
            <img src="@/assets/icons/close.png" />
          </div>
          <slot></slot>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: "app-modal",
  props: {
    noClose: { default: false, type: Boolean }
  },
  data() {
    return {
      showing: false
    };
  },
  methods: {
    show() {
      this.showing = true;
    },
    hide() {
      this.$emit("close");
      this.showing = false;
    }
  },
  watch: {
    showing(a) {
      let root = document.getElementsByTagName("html")[0];
      if (a) {
        document.body.classList.add("overflow-y-hidden");
        root.classList.add("overflow-y-hidden");
      } else {
        document.body.classList.remove("overflow-y-hidden");
        root.classList.remove("overflow-y-hidden");
      }
    }
  }
};
</script>
<style lang="scss">
.overflow-y-hidden {
  overflow-y: hidden;
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #00000033;
  z-index: 1000;
  overflow-y: auto;
  z-index: 10;
}
.modal-body {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100vh - 60px);
  z-index: 100;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .modal-content {
    max-width: 90%;
    width: 500px;
    margin: 0 auto;
    background: white;
    border-radius: 5px;
    overflow: hidden;
    position: relative;
    box-sizing: border-box;
    .close {
      position: absolute;
      top: 17px;
      right: 17px;
      width: 20px;
      height: 20px;
      text-align: center;
      cursor: pointer;
      img {
        width: 100%;
      }
    }
  }
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
@media (max-width: 800px) {
  .center-bottom {
    margin-left: 8.33333%;
  }
}
</style>
