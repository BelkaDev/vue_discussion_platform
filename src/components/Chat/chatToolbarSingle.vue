<template>
  <v-toolbar class="chat_toolbar" color="#FAFBFF" flat height="80px">
    <v-avatar class="ml-2" size="50">
      <img :src="receiver.avatar" alt="" />
    </v-avatar>
    <div class="toolbar_title">
      <span class="chat_title_primary"
        >{{ receiver.name.charAt(0).toUpperCase() + receiver.name.slice(1) }}
        {{
          receiver.lastName.charAt(0).toUpperCase() + receiver.lastName.slice(1)
        }}</span
      >
      <span v-if="last_message != null" class="chat_title_secondary"
        >Last message {{ last_message | moment("from", "now") }}</span
      >
      <span v-else class="chat_title_secondary">No messages</span>
    </div>

    <v-spacer></v-spacer>
    <template class="toolbar_buttons">
      <v-dialog max-width="600">
        <template v-slot:activator="{ on, modal }">
          <v-icon
            class="button_shadow icon_button"
            v-on="on"
            v-bind="modal"
            :color="'#979797'"
            >mdi-plus</v-icon
          >
        </template>
        <v-container style="background-color:white !important">
          <addMembers :receivers="receiverList"></addMembers>
        </v-container>
      </v-dialog>
      <iconButton
        v-if="!windowProperties.isExpanded"
        @click="expand"
        :color="'#979797'"
        :icon="'mdi-fullscreen'"
        :shadow="true"
      ></iconButton>
      <iconButton
        v-if="windowProperties.isExpanded"
        @click="expand"
        :color="'#979797'"
        :icon="'mdi-fullscreen-exit'"
        :shadow="true"
      ></iconButton>
      <iconButton
        @click="close"
        :color="'#979797'"
        :icon="'mdi-close'"
        :shadow="true"
      ></iconButton>
    </template>
  </v-toolbar>
</template>

<script>
import iconButton from "@/components/UI/Buttons/iconButton.vue";
import addMembers from "./addMembers";

export default {
  name: "chatToolbarSingle",
  props: ["receiver", "last_message"],
  data: () => ({
    windowProperties: { isExpanded: false, isClosed: false }
  }),

  methods: {
    expand() {
      if (!this.windowProperties.isExpanded) {
        this.expand_icon = "mdi-fullscreen-exit";
        this.windowProperties.isExpanded = true;
        this.windowProperties.isClosed = false;
      } else {
        this.expand_icon = "mdi-fullscreen";
        this.windowProperties.isExpanded = false;
        this.windowProperties.isClosed = false;
      }
      this.$emit("windowPropertiesChanged", this.windowProperties);
    },
    close() {
      this.windowProperties.isClosed = true;
      this.$emit("windowPropertiesChanged", this.windowProperties);
    }
  },
  components: {
    iconButton,
    addMembers
  },
  computed: {
    receiverList() {
      var receivers = [];
      receivers.push(this.receiver);
      return receivers;
    }
  },
  mounted() {}
};
</script>

<style>
.chat_title_primary {
  color: #0d1c2e;
  top: 20%;
  font-size: 20px;
}

.chat_title_secondary {
  color: #2a8bf2;
  font-size: 12px !important;
  left: 173px;
  top: 25%;
}
.toolbar_title * {
  position: fixed;
  display: inline-block !important;
}

.toolbar_buttons {
  padding: 2px;
  margin: 2px;
}
</style>
