<template>
  <div>
    <template>
      <div
        class="loader-ball w-full flex h-screen justify-center items-center flex-row"
      >
        <img src="@/assets/general/loader.png" />
      </div>
    </template>
  </div>
</template>
<script>
export default {
  name: "app-loader"
};
</script>
<style lang="scss">
.loader-ball {
  img {
    animation: infinite 3s rot linear;
    display: inline-block;
    width: 100px;
    height: 100px;
  }
}
@keyframes rot {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
