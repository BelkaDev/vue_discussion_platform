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
    </v-flex>
    <v-flex
    style=";"
      >
<router-view> </router-view>
    </v-flex>
</v-layout>
</v-container>
</template>

<script>
export default {
  components: {
  },
}
</script>