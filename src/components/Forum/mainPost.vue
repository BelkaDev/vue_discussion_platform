<template>
  <v-card class="mx-3" id="main_post">
    <v-card-title class="pb-0 pt-1">
      <v-list-item-avatar color="grey darken-3">
        <v-img class="elevation-2" :src="post.user.avatar"></v-img>
      </v-list-item-avatar>
      <span
        class="title username font-weight-bold"
        style="font-size:16px !important;"
        >{{ post.user.name.charAt(0).toUpperCase() + post.user.name.slice(1) }}
        {{
          post.user.lastName.charAt(0).toUpperCase() +
            post.user.lastName.slice(1)
        }}</span
      >
      <v-menu close-on-content-click :offset-y="true">
        <template v-on="on" v-slot:activator="{ on }">
          <v-icon
            v-on="on"
            class="post_icon_left mt-1 ml-1"
            v-if="post.user.id == loggedUser.id"
            >mdi-dots-horizontal</v-icon
          >
        </template>
        <v-list>
          <v-list-item @click="edit = true">
            <v-list-item-title>
              <v-icon>mdi-update</v-icon>Edit
            </v-list-item-title>
          </v-list-item>
          <v-list-item @click="deletePost(post.id)">
            <v-list-item-title>
              <v-icon>mdi-delete</v-icon>Delete
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-spacer></v-spacer>
      <span class="post_date font-weight-medium">{{
        post.date | moment("from", "now")
      }}</span>
    </v-card-title>

    <div :class="edit ? 'mx-3 mb-4' : ''">
      <span
        class="post_title font-weight-bold"
        style="font-size:16px !important; color:#888 !important"
        :contenteditable="editTitle"
        @focusout="updatePost()"
        v-on="
          edit
            ? { click: () => editPostTitle() }
            : { click: $event => $event.preventDefault() }
        "
        :class="edit ? 'editable_content mx-15' : ''"
        @keydown="onInput"
        >{{ post.title }}</span
      >

      <v-card-text
        :contenteditable="editContent"
        @focusout="updatePost()"
        v-on="
          edit
            ? { click: () => editPostContent() }
            : { click: $event => $event.preventDefault() }
        "
        :class="edit ? 'editable_content' : ''"
        v-text="post.content"
        style="white-space:pre-line"
        class="post_content"
      >
      </v-card-text>
    </div>
    <v-card-actions class="mt-n5">
      <v-list-item class="">
        <v-row align="center" justify="end" class="post_info ml-n8">
          <v-icon
            @mouseover="hovered = true"
            @mouseout="hovered = false"
            color="#999"
            @click="setLike()"
            class="post_info_icon mr-2"
            :class="hovered || isLiked ? 'hovered' : ''"
            size="25"
            >mdi-thumb-up</v-icon
          >
          <span class="mr-4 mt-1" style="color:#707C97 !important">{{
            post.likes.length
          }}</span>
          <v-icon color="#999" class="post_info_icon mr-2 mt-1" size="25"
            >mdi-forum</v-icon
          >
          <span class=" mr-4 mt-1" style="color:#707C97 !important">{{
            post.comments.length
          }}</span>
          <v-icon color="#999" class="post_info_icon  mr-2" size="25"
            >mdi-eye</v-icon
          >
          <span class="mr-4 mt-1" style="color:#707C97 !important">{{
            post.seen
          }}</span>
        </v-row>
      </v-list-item>
    </v-card-actions>
  </v-card>
</template>

<script>
import EventBus from "@/utils/eventBus";

export default {
  props: ["post", "isLiked", "loggedUser"],
  data: () => ({
    hovered: false,
    liked: false,
    edit: false,
    editContent: false,
    editTitle: false
  }),
  components: {},
  methods: {
    setLike() {
      if (!this.liked) {
        var like = {};
        like.date = Date.now();
        this.liked = true;
        EventBus.$emit("setLike", like);
      } else {
        this.liked = false;
        EventBus.$emit("unLike");
      }
    },
    deletePost() {
      EventBus.$emit("deletePost", this.post.id);
    },
    updatePost() {
      this.editContent = false;
      this.editTitle = false;
      var content = this.$el.querySelector(".post_content");
      var title = this.$el.querySelector(".post_title");
      this.post.content = content.innerText;
      this.post.title = title.innerText;
      EventBus.$emit("updatePost", this.post);
    },
    editPostContent() {
      this.editContent = true;
      this.editTitle = false;
      this.edit = false;
      var input = this.$el.querySelector(".post_content");
      this.post.content += "";
      setTimeout(function() {
        input.focus();
        document.execCommand("selectAll", false, null);
        document.getSelection().collapseToEnd();
      }, 0);
    },
    editPostTitle() {
      this.editTitle = true;
      this.editContent = false;
      this.edit = false;
      var input = this.$el.querySelector(".post_title");
      this.post.content += "";
      setTimeout(function() {
        input.focus();
        document.execCommand("selectAll", false, null);
        document.getSelection().collapseToEnd();
      }, 0);
    },
    onInput(e) {
      if (e.keyCode == 13) {
        e.preventDefault();
      }
    }
  },
  mounted() {
    this.liked = this.isLiked;
    const that = this;
    EventBus.$on("openPost", function() {
      that.edit = false;
    });
  }
};
</script>
<style>
.post_info_icon {
  opacity: 0.7;
}

.subheading {
  font-size: 14px;
}
.post_date {
  color: #707c97 !important;
  font-size: 14px !important;
  padding-top: 2px;
}
.post_content {
  text-align: left;
  color: #777;
  padding-left: 30px;
}
.username {
  text-transform: capitalize !important;
  color: #888;
}
.hovered {
  color: blue !important;
}
.option_menu {
  background-color: white !important;
  border: 2px solid red !important;
}
.editable_content {
  cursor: pointer;
  padding: 10px;
  margin-top: 20px;
  width: 100%;
  border-radius: 4px;
  outline: none;
  box-sizing: border-box;
  border-color: dodgerBlue;
  box-shadow: 0 0 8px 0 dodgerBlue;
}
</style>
