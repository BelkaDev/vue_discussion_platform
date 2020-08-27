<template>
        <v-row class="pt-2">
          <v-col cols="1" class="pt-7 ml-4">
              <iconButton :icon="'mdi-plus'" :shadow="true" :gradient="true"></iconButton>

          </v-col>
          <v-col class="ml-5" cols="8">
            <v-textarea
              @click:append-outer="sendMessage"
              @keyup.enter="sendMessage"
              v-model="messageNew.text"
              :no-resize="true"
              :label="label"
              rows="1"
            ></v-textarea>
          </v-col>
         <v-col cols="1" class="pr-15 pt-7">
              <iconButton :icon="'mdi-send'" :shadow="true" :gradient="true"></iconButton>
          </v-col>
        </v-row>
</template>


<script>
import iconButton from "@/components/UI/Buttons/iconButton.vue";


export default {
  name: "",

  props: ["label"],
  data: () => ({
    messageNew: {
      text: null
    }
    
  }),
    components: {
      iconButton
  },
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
