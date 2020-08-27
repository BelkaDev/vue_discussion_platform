<template>
<div id="app">
  <v-app id="inspire">
    <v-container fluid grid-list-md>
      <v-layout row wrap>
        
        <v-flex d-flex xs12 sm12 md8 lg8 xl8>
          <v-layout row wrap>
            
            <v-flex d-flex>
              <v-layout row wrap>
                <v-flex
                  v-for="n in 2"
                  :key="n"
                  d-flex
                  xs12
                >
                  <v-card
                    color="red lighten-2"
                    dark
                  >
                    <v-card-text>{{ lorem.slice(0, 40) }}</v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-flex>
        
        <v-flex d-flex xs12 sm12 md4 lg4 xl4 child-flex>
          <v-card color="green lighten-2" dark>
            <v-card-text>{{ lorem.slice(0, 90) }}</v-card-text>
          </v-card>
        </v-flex>

      </v-layout>
    </v-container>
  </v-app>
</div>
</template>
<script>
export default {

  data: () => ({}),

  methods: {}
};
</script>
