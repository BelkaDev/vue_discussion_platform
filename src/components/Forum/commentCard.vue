<template>
  <div>
    <v-card outlined class="post_card">
      <v-card-title class="pb-0 pt-1">
        <v-list-item-avatar color="grey darken-3">
          <v-img class="elevation-6" :src="comment.user.avatar"></v-img>
        </v-list-item-avatar>

        <span
          class="title username font-weight-bold"
          style="font-size:16px !important;"
          >{{
            comment.user.name.charAt(0).toUpperCase() +
              comment.user.name.slice(1)
          }}
          {{
            comment.user.lastName.charAt(0).toUpperCase() +
              comment.user.lastName.slice(1)
          }}</span
        >

        <v-menu close-on-content-click :offset-y="true">
          <template v-on="on" v-slot:activator="{ on }">
            <v-icon
              v-on="on"
              class="ml-1 mt-1"
              v-if="comment.user.id == loggedUser.id"
              >mdi-dots-horizontal</v-icon
            >
          </template>
          <v-list>
            <v-list-item @click="editComment(comment.id)">
              <v-list-item-title>
                <v-icon>mdi-update</v-icon>Edit
              </v-list-item-title>
            </v-list-item>
            <v-list-item @click="deleteComment(comment.id)">
              <v-list-item-title>
                <v-icon>mdi-delete</v-icon>Delete
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-spacer></v-spacer>
        <span class="post_date font-weight-medium">{{
          comment.date | moment("from", "now")
        }}</span>
      </v-card-title>

      <v-card-text
        :contenteditable="edit"
        @focusout="updateComment()"
        v-text="comment.content"
        style="white-space:pre-line"
        class="comment_content font-weight-medium"
      >
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import EventBus from "@/utils/eventBus";

export default {
  props: ["comment", "loggedUser"],
  data: () => ({
    edit: false,
    content: "",
    editedText: ""
  }),
  components: {},
  methods: {
    updateComment() {
      var input = this.$el.querySelector(".comment_content");
      this.edit = false;
      this.comment.content = input.innerText;
      EventBus.$emit("updateComment", this.comment);
    },
    editComment() {
      this.edit = true;
      var input = this.$el.querySelector(".comment_content");
      this.comment.content += "";
      setTimeout(function() {
        input.focus();
        document.execCommand("selectAll", false, null);
        document.getSelection().collapseToEnd();
      }, 0);
    },
    deleteComment() {
      EventBus.$emit("deleteComment", this.comment.id);
    }
  }
};
</script>
<style lang="scss" scoped>
.subheading {
  font-size: 14px;
}
.post_date {
  color: #707c97 !important;
  font-size: 14px !important;
  padding-top: 2px;
}
.post_card {
  margin: 0 10px;
}
.comment_content {
  text-align: left;
}
</style>
