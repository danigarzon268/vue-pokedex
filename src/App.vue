<template>
  <div id="app">
    <component :is="layout">
      <app-loader v-show="loading" />
      <div v-show="!loading">
        <router-view />
      </div>
    </component>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

const default_layout = "default";
export default {
  computed: {
    ...mapGetters(["loading"]),
    layout() {
      return (this.$route.meta.layout || default_layout) + "-layout";
    }
  }
};
</script>
