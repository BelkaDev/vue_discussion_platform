<template>
        <v-row class="pt-2">
          <v-col cols="2" class="pr-2 pt-7">
              <v-btn
                fab
                dark
                small
                color="primary"
                class="send_icon"
                @click="sendMessage"
              >
                            <v-icon dark size="22">mdi-plus</v-icon>
              </v-btn>
          </v-col>
          <v-col class="ml-n6" cols="8">
            <v-textarea
              @click:append-outer="sendMessage"
              @keyup.enter="sendMessage"
              v-model="messageNew.text"
              :label="label"
              rows="1"
            ></v-textarea>
          </v-col>
         <v-col cols="1" class="pr-15 pt-7">
              <v-btn
                fab
                dark
                small
                color="primary"
                class="send_icon"
                @click="sendMessage"
              >
                            <v-icon dark size="22">mdi-send</v-icon>
              </v-btn>
          </v-col>
        </v-row>
</template>


<script>
export default {
  name: "",

  props: ["label"],
  data: () => ({
    messageNew: {
      text: null
    }
    
  }),
  methods: {
    sendMessage() {
    this.$emit("sendMessage",this.messageNew)
    this.messageNew.text = null;
	}
}

};
</script>

<style>
.v-textarea {
  opacity:0.5;
}

.send_icon {
    background: linear-gradient(to top, rgba(42, 139, 242, 1), rgba(124, 184, 247, 1));
    box-shadow: 0px 0px 3px #2A8BF2;
}
</style>
