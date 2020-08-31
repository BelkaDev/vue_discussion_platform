<template>
<div>
  <v-btn v-if="!block" large :class="customClass" :style="customStyle">
    <slot/>
  </v-btn>
  <v-btn class="" v-if="block" block large :class="customClass" :style="customStyle" >
    <slot/>
  </v-btn>
  </div>
</template>

<script>
export default {
  name: "iconButton",

  props: ["icon","color", "shadow","gradient","block","style"],
  data: () => ({
      customClass: "default_button",
      customStyle: "color:white",
  }),

  methods: {  
    handleClick() {
    	this.$emit('click')
    },
    setClass() {
        if (this.gradient) {
            this.customClass+=" button_gradient"
        }
        if (this.shadow) {
            this.customClass+=" button_shadow"
        }
    },
    setStyle(){
        if (this.color) {
        this.customStyle="color: "+this.color+" !important;"
        }
        if (this.style) {
          this.customStyle=this.style;
        }
    }
  },
    mounted() {
    this.setClass();
    this.setStyle();
  },
};
</script>

<style>

.default_button {
  opacity: .95;
  text-transform:none !important;

}
.button_gradient {
        background: linear-gradient(to top, rgba(42, 139, 242, 1), rgba(124, 184, 247, 1));
        box-shadow: 0px 0px 3px #2A8BF2;
}

 .button_shadow {
  box-shadow: 
  0px 3px 10px rgba(0,0,0,0.2);
}


</style>