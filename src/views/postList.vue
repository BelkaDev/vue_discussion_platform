<template>
  <span>
    <searchBar
      @sortList="sortList($event)"
      @searchList="searchList($event)"
      v-if="posts.length != 0"
      :message="'Search in posts'"
      :list="posts"
      :posts="true"
      style="margin-top:90px;margin-bottom:20px;margin-left:2px;"
    />

    <v-list id="postList" class="list_layout">
      <h1
        v-if="posts.length == 0"
        class="display-1 grey--text text--darken-2 no_posts"
      >
        There is no post for this document
        <br />
        create a new one.
      </h1>
      <draggable v-model="filtered_posts" group="posts">
        <v-list-item-group v-for="post in filtered_posts" :key="post.id">
          <v-card
            class="post_card pa-2"
            :id="post.id"
            @click="openPost(post)"
            :class="post.id === selectedIndex ? 'selected_post' : ''"
          >
            <v-card-title class="pb-0 pt-1">
              <v-list-item-avatar color="grey darken-3">
                <v-img class="elevation-6" :src="post.user.avatar"></v-img>
              </v-list-item-avatar>
              <span
                class="title font-weight-bold"
                style="font-size:16px !important;"
                >{{ post.user.name }} {{ post.user.lastName }}</span
              >
              <v-spacer></v-spacer>
              <span class="post_date font-weight-medium">{{
                post.date | moment("from", "now")
              }}</span>
            </v-card-title>

            <span
              class="title font-weight-bold"
              style="font-size:16px !important; color:#555"
              >{{ post.title }}</span
            >

            <v-card-text class="">
              {{
                post.content
                  .split(/\s+/)
                  .slice(0, 35)
                  .join(" ")
              }}
              <span v-if="post.content.length > 35"> ... </span>
              <span
                v-if="post.content.length > 35"
                style="color:#2A8BF2 !important"
                >(read more)</span
              >
            </v-card-text>

            <v-card-actions class="mt-n3 mb-2 mr-4">
              <v-row align="center" justify="end" class="post_info ml-n8">
                <v-icon class="post_info_icon mr-2" size="18"
                  >mdi-thumb-up</v-icon
                >
                <span
                  class="subheading mr-3 mt-1"
                  style="color:#707C97 !important"
                  >{{ post.likes.length }}</span
                >
                <v-icon class="post_info_icon mr-2 " size="18"
                  >mdi-forum</v-icon
                >
                <span
                  class="subheading mr-3 mt-1"
                  style="color:#707C97 !important"
                  >{{ post.comments.length }}</span
                >
                <v-icon class="post_info_icon  mr-2" size="18">mdi-eye</v-icon>
                <span
                  class="subheading mr-3 mt-1"
                  style="color:#707C97 !important"
                  >{{ post.seen }}</span
                >
              </v-row>
            </v-card-actions>
          </v-card>
        </v-list-item-group>
      </draggable>
    </v-list>
    <alertDialog
      :trigger="alertTrigger"
      :type="alertType"
      :message="alertMessage"
    ></alertDialog>
  </span>
</template>

<script>
import EventBus from "@/utils/eventBus";
import draggable from "vuedraggable";

import searchBar from "@/components/Shared/searchBar";
import alertDialog from "@/components/UI/Alerts/alert";

import postService from "@/services/Forum/postService";

export default {
  props: ["loggedUser", "document"],
  data: () => ({
    selectedIndex: 0,
    postService: null,
    filterString: "",
    posts: [],
    alertMessage: "",
    alertType: "",
    alertTrigger: false
  }),
  components: {
    searchBar,
    draggable,
    alertDialog
  },
  methods: {
    showAlert(type, msg) {
      this.alertType = type;
      this.alertMessage = msg;
      this.alertTrigger = true;
    },
    openPost: function(post) {
      this.selectedIndex = post.id;
      EventBus.$emit("openPost", post);
    },
    searchList(search) {
      this.filterString = search;
    },
    sortList(list) {
      this.posts = list;
    }
  },
  computed: {
    filtered_posts: {
      get: function() {
        return this.posts.filter(element => {
          return element.content
            .toLowerCase()
            .includes(this.filterString.toLowerCase());
        });
      },
      set: function(newValue) {
        this.posts = newValue;
      }
    }
  },

  mounted() {
    this.alertTrigger = false;
    const that = this;
    this.postService = new postService(this.$http, this.$hostname);
    this.posts = this.document.posts;
    EventBus.$on("createPost", function(post) {
      post.user = that.loggedUser;
      post.id = that.document.posts.length + 1;
      if (!that.document.posts.includes(post)) {
        that.document.posts.push(post);
        that.postService
          .createPost(that.document)
          .then(() => {
            that.showAlert("success", "Created post successfully");
          })
          .catch(() => {
            that.showAlert("error", "Error creating post");
          });
      }
    });
    EventBus.$on("layoutPropertiesChanged", function(properties) {
      if (properties.isClosed == true) {
        that.selectedIndex = null;
      }
    });
  },
  beforeDestroy() {
    EventBus.$off("createPost", true);
  }
};
</script>

<style>
.list_layout {
  margin-left: 8px;
  background-color: transparent !important;
}
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
.post_card {
  margin: 8px !important;
  margin-bottom: 20px !important;
  margin-right: 18px !important;
}
.selected_post {
  filter: brightness(94%);
  box-shadow: 0px -1px 1px white inset, 6px -1px 1px #c8e6c9 inset !important;
}

.scroll {
  overflow-y: auto;
  width: 100%;
  height: 100%;
  padding-right: 0px; /* Increase/decrease this value for cross-browser compatibility */
}
.no_posts {
  margin-top: 200px;
}
.clickable_text {
  cursor: pointer;
}
</style>
