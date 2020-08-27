<template>
<v-btn :class="shadow ? 'icon_button button_shadow' : 'icon_button'"
 :color="color"
 @click="handleClick">
 {{text}}

</v-btn>
</template>

<script>
export default {
  name: "iconButton",
  props: ["text","color","shadow"],
  data: () => ({}),

  methods: {  
    handleClick() {
    	this.$emit('click')
    }}
};
</script>

<style>

.button {
  background-color: white !important;
  padding:8px;
  opacity: .6;
  margin:5px;
}

 .button_shadow {
  box-shadow: 
  0px 3px 10px rgba(0,0,0,0.2);
}


</style>