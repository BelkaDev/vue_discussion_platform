<template>
<v-container style="padding:0; margin:0">
    <v-layout>
    <v-flex
     class="xs2 sm2 md2 lg2 x2">
          <li><router-link to="/discussions/1">document 1</router-link></li>
     <li><router-link to="/discussions/2">document 2</router-link></li>
     <li><router-link to="/discussions/3">document 3</router-link></li>
     <li><router-link to="/discussions/4">document 4</router-link></li>
     <li><router-link to="/discussions/5">document 5</router-link></li>
<br>
<br>
          <li @click="changeUser(1)" class="clickable" :class="isSelected == 1 ? 'selected' : ''">User 1</li>
          <li @click="changeUser(2)" class="clickable" :class="isSelected == 2 ? 'selected' : ''" >User 2</li>
          <li @click="changeUser(3)" class="clickable" :class="isSelected == 3? 'selected' : ''">User 3</li>

    </v-flex>
    
    <v-flex
    style=";"
      >
    </v-flex>
<router-view> </router-view>
</v-layout>

</v-container>
</template>

<script>
import EventBus from "@/utils/eventBus";

export default {
  data: () => ({
    isSelected : 1
  }),
  methods :{
    changeUser(user) {
      this.isSelected = user
      EventBus.$emit("changeUser",user)
    }
  },
  components: {
  },
}
</script>

<style scoped>
.selected {
color:green;
}
</style>