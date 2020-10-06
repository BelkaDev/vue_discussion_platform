<template>
  <div
  class="alert_dialog">
<v-alert
  dismissible
  :type="type"
  :value="trigger"
>{{message}}</v-alert>

    <div class="text-center">
    </div>
  </div>
</template>

<script>
  export default {
  props: ["trigger","type","message"],    
    data () {
      return {
        
      }
    },
    created(){
    setTimeout(()=>{
      this.trigger=false
    },6000)
  }
  }
</script>
<style scoped>
.alert_dialog {
  position:fixed;
  opacity:0.8;
  bottom: 20px;
  right:165px;
  margin-left:250px;
}
</style>