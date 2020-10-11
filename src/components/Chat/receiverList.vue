<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-list two-line subheader>
          <v-list-tile
            v-for="receiver in receivers"
            v-bind:key="receiver.id"
            avatar
          >
            <v-list-tile-avatar>
              <v-icon v-bind:class="[receiver.avatar]">{{
                receiver.avatar
              }}</v-icon>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>{{ receiver.name }}</v-list-tile-title>
              <v-list-tile-sub-title>{{
                receiver.lastName
              }}</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-icon color="grey lighten-1">info</v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  props: ["receivers"],
  data() {}
};
</script>
