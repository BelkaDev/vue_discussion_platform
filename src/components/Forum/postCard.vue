<template>
        <v-card class="position-relative profile-card mb-7">
          <v-card-text class="pa-5">
            <div class="text-center">
              <img
                src="https://randomuser.me/api/portraits/men/81.jpg"
                alt="user"
                class="rounded-circle"
                width="100"
              />
              <h2 class="font-weight-regular">Angela Dominic</h2>
              <h6 class="op-5 font-weight-regular">Web Designer & Developer</h6>
              <v-btn
                color="deep-purple accent-2"
                x-large
                class="text-capitalize white--text mt-7"
                rounded
              >Follow</v-btn>
              <v-row class="mt-6">
                <v-col cols="4">
                  <h3 class="mb-0 font-weight-light blue-grey--text text--darken-2">1099</h3>
                  <small class="blue-grey--text text--darken-2">Articles</small>
                </v-col>
                <v-col cols="4">
                  <h3 class="mb-0 font-weight-light blue-grey--text text--darken-2">23,469</h3>
                  <small class="blue-grey--text text--darken-2">Followers</small>
                </v-col>
                <v-col cols="4">
                  <h3 class="mb-0 font-weight-light blue-grey--text text--darken-2">6035</h3>
                  <small class="blue-grey--text text--darken-2">Following</small>
                </v-col>
              </v-row>
            </div>
          </v-card-text>
        </v-card>
</template>

<script>
export default {
  name: "postCard",

  props: {
    heading: {
      type: String,
      default: ""
    }
  },
  data: () => ({}),

  methods: {}
};
</script>
