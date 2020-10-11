<template>
  <div>
    <v-btn
      v-if="!block"
      large
      :class="customClass"
      :style="customStyle"
      @click="handleClick"
    >
      <slot />
    </v-btn>
    <v-btn
      class=""
      v-if="block"
      block
      large
      :class="customClass"
      :style="customStyle"
      @click="handleClick"
    >
      <slot />
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "iconButton",

  props: ["icon", "color", "shadow", "gradient", "block", "style"],
  data: () => ({
    customClass: "default_button",
    customStyle: "color:white"
  }),

  methods: {
    handleClick() {
      this.$emit("click");
    },
    setClass() {
      if (this.gradient) {
        this.customClass += " button_gradient";
      }
      if (this.shadow) {
        this.customClass += " button_shadow";
      }
    },
    setStyle() {
      if (this.color) {
        this.customStyle = "color: " + this.color + " !important;";
      }
      if (this.style) {
        this.customStyle = this.style;
      }
    }
  },
  mounted() {
    this.setClass();
    this.setStyle();
  }
};
</script>

<style>
.default_button {
  opacity: 0.95;
  text-transform: none !important;
}
.button_gradient {
  border-radius: 0;
  background-color: #60a9f6;
  box-shadow: 0px 0px 3px #2a8bf2;
}

.button_shadow {
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
}
</style>
