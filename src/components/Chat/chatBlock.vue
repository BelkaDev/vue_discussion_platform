<template>
  <div>
    <div v-if="sent" :message-id="message.id" class="message">
            <v-avatar v-if="isFirst" class="message_avatar_left ml-n1" size="38">
        <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
      </v-avatar>
      <li class="message_chain me">{{ message.msg }}</li>
      <v-icon class="message_icon_left">mdi-dots-horizontal</v-icon>
      <p v-if="isLast" class="message_date_left">4 hours ago</p>
    </div>

    <div v-else class="message">
      <v-avatar v-if="isFirst" class="message_avatar_right ml-2" size="38">
        <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
      </v-avatar>
      <li
        class="message_chain him"
      >
      <span :contenteditable="edit"
        @focusout="updateMessage()"
        style="white-space: pre-line;	overflow-wrap: break-word;"
        @keydown="onInput"
      class="message_content"
      v-text="message.msg">
  
        </span>
      </li>

      <v-menu close-on-content-click :offset-y="true">
        <template v-on="on" v-slot:activator="{ on }">
          <v-icon v-on="on" class="message_icon_right"
            >mdi-dots-horizontal</v-icon
          >
        </template>
        <v-list-item @click="editMessage(message.id)">
          <v-list-item-title>
            <v-icon>mdi-update</v-icon>Edit
          </v-list-item-title>
        </v-list-item>
        <v-list-item @click="deleteMessage(message.id)">
          <v-list-item-title>
            <v-icon>mdi-delete</v-icon>Delete
          </v-list-item-title>
        </v-list-item>
      </v-menu>
      <p v-if="isLast" class="message_date_right">4 hours ago</p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["message", "sent", "isFirst", "isLast", "discussion"],
  data: () => ({
    edit: false,
    editedText: "",
    id: 0
  }),
  methods: {
    updateMessage() {
      this.edit = false;
      var input = this.$el.querySelector(".message_content");
      this.message.msg = input.innerText;    
      },
    onInput() {
  },
    deleteMessage(id) {
      var container = this.$el.querySelectorAll("[message-id='" + id + "']");
      console.log(container);
    },
    editMessage() {
      this.edit = true;
      var input = this.$el.querySelector(".message_content");
      this.message.msg += "\xa0";
      setTimeout(function() {
        input.focus();
        document.execCommand("selectAll", false, null);
        document.getSelection().collapseToEnd();
      }, 0);
    }
  },
};
</script>

<style>
ul li {
  display: inline-block;
  clear: both;
  padding: 10px;
  font-family: Helvetica, Arial, sans-serif;
  opacity: 0.8;
}

.me {
  float: right;
  background: #fff;
  border-radius: 10px 10px 0px 10px;
  text-align: right;
  margin-left: 10%;
  margin-right: 4em;
  margin-bottom: 0.5em;
  margin-top: 0.5em;
  color: #707c97;
  border: 1px solid rgba(112, 124, 151, 0.25);
}

.him {
  float: left;
  background: linear-gradient(to right, #60a9f6, #2a8bf2);
  border-radius: 0px 10px 10px 10px;
  text-align: left;
  margin-left: 3.5em;
  margin-right: 10%;
  margin-bottom: 0.5em;
  margin-top: -2em;
  color: #fff;
  box-shadow: 2px 5px 15px rgba(42, 139, 242, 0.4);
}
.message {
  padding: 0;
  margin: 0;
}
.message_icon_right {
  float: left;
  margin-top: -0.85em;
  margin-left: -2em;
  opacity: 0.6;
}
.message_icon_left {
  float: right;
  margin-top: 0.85em;
  margin-right: -2em;
  opacity: 0.6;
}
.message_date_left {
  color: #707c97;
  opacity: 0.95;
  position: relative;
  float: right;
  font-size: 12px;
  display: block;
  margin-left: 76.5%;
  margin-right: 2em;
  padding: -5px;
}
.message_date_right {
  color: #707c97;
  opacity: 0.75;
  position: relative;
  float: left;
  font-size: 12px;
  display: block;
  margin-left: 5em;
  margin-top: 0px;
  margin-right: 70%;
}
.message_avatar_right {
  float:left;
  top: 6px;
}
.message_avatar_left {
  float:left;
  top: 6px;
}
/* Messages un envoyés après l'autre */
.message_chain {
  display: block;
  margin-top: 0.2em;
  margin-bottom: 0.1em;
}
.message_chain:not(:first-child) {
  margin-top: -2em;
  box-shadow: 1px 0.5px 3px rgba(42, 139, 242, 0.4);
}
</style>
