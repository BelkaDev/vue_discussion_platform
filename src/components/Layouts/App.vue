<template>
<div id="app">
  <v-app id="inspire">

    <v-layout column style="border:solid 1px red">
      <v-flex xs12 class="indigo white--text"> xxxxxxxx</v-flex>
      <v-layout>
        <v-layout column xs1 class="green white--text; width: 20px; ">
          <v-flex xs12>
            <v-layout row wrap style="overflow-y: hidden; display: block;">
              <div v-for="(i,v) in [0,1,2,3,4,5,6,7,8,9,10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]" style="padding-top: 10px; border: red 1px solid;">
                 {{v}}
              </div>
            </v-layout>
          </v-flex>
        </v-layout>
        <v-layout column xs11 class="blue white--text">
          <v-flex xs12>ylkjasdlfjsdlf</v-flex>
        </v-layout>
      </v-layout>
      <v-flex xs12 class="red white--text"> xxxxxxxx</v-flex>
    </v-layout>
  </v-app>
</div>
</template>
<script>

export default {

  data: () => ({}),

  methods: {}
};
</script>
