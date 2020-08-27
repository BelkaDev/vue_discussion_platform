<template>
  <v-container class="scroll-y">
    <v-layout align-center justify-center>
      <v-flex xs12>
        <v-toolbar color="cyan" dark id="scroll-target">
          <v-toolbar-side-icon></v-toolbar-side-icon>
          <v-toolbar-title>Scroll Down</v-toolbar-title>
        </v-toolbar>
        <v-btn
          v-scroll="onScroll"
          v-show="fab"
          fab
          dark
          fixed
          bottom
          right
          color="primary"
          @click="toTop"
        >
          <v-icon>keyboard_arrow_up</v-icon>
        </v-btn>
        <v-card style="height: 1000px">
          <v-card-title primary-title>
            <div>
              This example demonstrates how to create a "scroll to top" button
              that becomes visible when the user starts to scroll the page.
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    fab: false
  }),

  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 20;
    },
    toTop() {
      this.$vuetify.goTo(0);
    }
  }
};
</script>
