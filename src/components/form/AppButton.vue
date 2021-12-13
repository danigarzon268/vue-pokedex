<template>
  <button
    :type="type"
    class="btn-general"
    :class="extraClass"
    v-on:click="clicked"
    :disabled="disabled"
  >
    <template v-if="icon">
      <img :src="require(`@/assets/icons/${icon}`)" :class="classIcon" />
    </template>
    <template v-if="loading">
      <app-btn-loader />
    </template>
    <template v-else>
      <slot></slot>
    </template>
  </button>
</template>

<script>
export default {
  name: "app-button",
  props: {
    extraClass: { type: String, required: false },
    loading: { type: Boolean, required: false, default: false },
    icon: { type: String, required: false },
    type: { type: String, required: false, default: "button" },
    disabled: { type: Boolean, required: false, default: false },
    classIcon: { type: String, required: false }
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    clicked() {
      this.$emit("click");
    }
  }
};
</script>

<style lang="scss">
.btn-general {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: auto;
  border-radius: 60px;
  color: #fff;
  font-size: 18px;
  transition: 0.2s;
  font-weight: 700;
  padding: 11px 20px;
  text-align: center;
  margin: 0 auto;

  &.primary {
    background: var(--color-red);
    &:hover {
      background: var(--color-secundary-red);
    }
  }
  &.secondary {
    background: var(--color-primary-gray);
  }
  &.white-secondary {
    background: var(--color-secundary-white);
  }
  &.active {
    background: var(--color-red);
  }
}
</style>
