<template>
  <div class="my-2">
    <template v-if="type === 'select'">
      <select
        :id="name"
        v-model="inputValue"
        :class="extraClass"
        :placeholder="placeholder"
        v-on:keyup="keyup"
        class="form-control"
        :disabled="disabled"
      >
        <slot></slot>
      </select>
    </template>
    <template v-else>
      <template v-if="label">
        <label class="input-label my-2">{{ label }}</label>
      </template>
      <div class="relative">
        <template v-if="icon">
          <div class="box-icon absolute">
            <img
              :src="require(`@/assets/icons/${icon}`)"
              alt="search"
              width="18"
              class=""
            />
          </div>
        </template>
        <input
          :type="type"
          v-model="inputValue"
          class="form-control"
          :class="extraClass"
          :placeholder="placeholder"
          v-on:keyup="keyup"
          :disabled="disabled"
          :name="name"
        />
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "app-input",
  props: {
    label: { type: String, required: false },
    type: { type: String, required: false, default: "text" },
    placeholder: { type: String, required: false },
    value: { required: false },
    extraClass: { type: String, required: false },
    disabled: { type: Boolean, required: false, default: false },
    name: { type: String, required: false, default: null },
    icon: { type: String, required: false, default: null }
  },
  data() {
    return {
      inputValue: ""
    };
  },
  mounted() {
    this.inputValue = this.value;
  },
  methods: {
    change() {
      this.$emit("input", this.inputValue);
    },
    keyup() {
      this.$emit("keyup");
    }
  },
  watch: {
    inputValue() {
      this.change();
    },
    value(a) {
      if (a != this.inputValue) {
        this.inputValue = a;
      }
    }
  }
};
</script>

<style lang="scss">
.form-control {
  background: #ffffff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.04);
  border-radius: 5px;
  padding: 1rem 1rem 1rem 3rem;
  width: 100%;
  font-family: "Montserrat";
}

.box-icon {
  top: 1rem;
  left: 1.3rem;
}
</style>
