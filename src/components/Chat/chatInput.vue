<template>
  <v-row class="">
    <v-col cols="1" class="pt-14 ml-4">
      <iconButton
        :icon="'mdi-plus'"
        :shadow="true"
        :gradient="true"
      ></iconButton>
    </v-col>
    <v-col class="ml-5 mt-6" cols="8">
      <v-textarea
        @click:append-outer="sendMessage"
        @keydown="inputHandler"
        v-model="messageContent"
        :label="label"
        rows="1"
        :no-resize="true"
      ></v-textarea>
    </v-col>

    <v-col cols="2" class="pr-15 pt-14">
      <iconButton
        @click="sendMessage"
        :icon="'mdi-send'"
        :shadow="true"
        :gradient="true"
      ></iconButton>
    </v-col>
  </v-row>
</template>

<script>
import iconButton from "@/components/UI/Buttons/iconButton";

export default {
  name: "",

  props: ["label"],
  data: () => ({
    newMessage: {},
    messageContent: ""
  }),
  components: {
    iconButton
  },
  methods: {
    sendMessage() {
      if (this.messageContent != "") {
        this.newMessage.content = this.messageContent;
        this.newMessage.date = Date.now();
        this.$emit("sendMessage", this.newMessage);
        this.messageContent = null;
        this.newMessage = {};
      }
    },
    inputHandler(e) {
      if (e.keyCode === 13 && !e.shiftKey) {
        e.preventDefault();
        this.sendMessage();
      } else if (e.keyCode === 13 && e.shiftKey) {
        this.newMessage.content += "\n";
      }
    }
  }
};
</script>

<style>
.v-textarea {
  opacity: 0.5;
}

.send_icon {
  background: linear-gradient(
    to top,
    rgba(42, 139, 242, 1),
    rgba(124, 184, 247, 1)
  );
  box-shadow: 0px 0px 3px #2a8bf2;
}
</style>
