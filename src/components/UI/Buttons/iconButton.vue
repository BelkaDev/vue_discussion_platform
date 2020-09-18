<template>
<v-icon :class="customClass"
 :style="customStyle"
 @click="handleClick"
 >{{icon}}</v-icon>
</template>

<script>
export default {
  name: "iconButton",

  props: ["icon","color", "shadow","gradient"],
  data: () => ({
      customClass: "icon_button",
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
    }
  },
    mounted() {
    this.setClass();
    this.setStyle();
  },
};
</script>

<style scoped>

.icon_button {
  border-radius: 50%;
  padding:8px;
  opacity: 0.80;
  margin:5px;
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