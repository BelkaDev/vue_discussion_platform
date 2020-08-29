<template>
<v-content >
  <v-container grid-list-md class="fill-height" style="border:5px solid purple">
    <v-layout row wrap justify-space-between>
      <v-flex d-flex xs12 sm6 md6 lg5 xl6>
        <v-layout row wrap class="left_layout pa-0">

          <v-flex d-flex>
            

                <div class="post_list">
                   <v-card>
                  <v-card-text
                    >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Blanditiis aperiam ipsum molestias unde laboriosam corrupti,
                    rem delectus dolorem laborum asperiores? Perferendis
                    exercitationem cumque quaerat omnis non illo maxime, animi
                    corporis!</v-card-text
                  >
                </v-card>
                </div>
 
          </v-flex>
        </v-layout>
      </v-flex>

      <v-flex d-flex xs12 sm12 md6 lg7 xl6 child-flex>
        <v-layout row wrap class="right_layout pl-0">
          <chatbox></chatbox>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
  </v-content>
</template>
<script>
import chatbox from "@/components/Chat/chatbox.vue";

export default {
  data: () => ({}),

  methods: {},
  components: {
    chatbox
  }
};
</script>

<style>

</style>
