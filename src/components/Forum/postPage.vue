<template>
<v-container>
  <v-layout class="post_detail" fill-height >
    <v-flex>
      <div >
      <postPageToolbar
       @addComment="addComment()"
       @close="closeWindow($event)"
       @windowPropertiesChanged="updateSize($event)"
      ></postPageToolbar>
      <mainPost :post="post"/>
                <separator v-if="post.comments.length > 0" class="mt-3">
                  <b>Comments</b>
                </separator>
      <commentList
       :comments="post.comments"></commentList>
      <div id="comment_input">
      <commentInput
      @addComment="submitComment($event)"
      />
      </div>
      </div>
    </v-flex>
  </v-layout>
 

</v-container>
</template>


<script>
import postPageToolbar from "./postPageToolbar";
import mainPost from "./mainPost";
import commentList from "./commentList"
import commentInput from "./commentInput"
import separator from "@/components/Shared/separator.vue";
import EventBus from "@/utils/eventBus";

import commentService from "@/services/forum/commentService";

  export default {
    props: ["loggedUser","document"],  
    data: () => ({
      post: [],
    }),
    components: {
      postPageToolbar,
      mainPost,
      commentList,
      commentInput,
      separator
    },
    methods: {
      submitComment(newComment) {
      var postIndex = this.document.posts.findIndex(post => post.id == this.post.id);
      this.document.posts[postIndex].comments.push(newComment)
      this.commentService.addComment(this.document).then(() => {
      });
      var container = this.$el.querySelector("#commentList");
      container.scrollTop = 1000;
          },
      updateSize(newProperties) {
      this.windowProperties = newProperties
      this.$emit("layoutPropertiesChanged",{"isExpanded":this.windowProperties.isExpanded,"isClosed":this.windowProperties.isClosed,"component":"chatbox"})
    },
    closeWindow(newProperties) {
      this.windowProperties = newProperties
      this.$emit("layoutPropertiesChanged",{"isExpanded":this.windowProperties.isExpanded,"isClosed":this.windowProperties.isClosed,"component":"chatbox"})
    },
    addComment() {
      var container = this.$el.querySelector("#comment_input");
     container.scrollIntoView({ behavior: 'smooth', block: 'end' });
     var el = document.getElementById('comment_box');
     el.focus();
    },
    refreshComments(postIndex){
      const that = this
      this.commentService.getComments(this.document.id,this.post.id).then((comments) => {
        that.document.posts[postIndex].comments = comments;
        alert(postIndex)
      })
    }
    },

    created () {
    const that = this;
    this.commentService = new commentService(this.$http,this.$hostname);
    // called from postList.vue
    EventBus.$on("openPost", function (post) {
    that.post = post
    var container = that.$el.querySelector("#main_post");
    if(container)
    container.scrollIntoView({ behavior: 'smooth', block: 'end' });
    });
        EventBus.$on("updateComment", function (updatedComment) {
var postIndex = that.document.posts.findIndex(post => post.id == that.post.id);
var commentIndex = that.post.comments.findIndex(comment => comment.id == updatedComment.id);
that.document.posts[postIndex].comments[commentIndex] = updatedComment
        that.commentService.updateComment(that.document).then(() => {
        
      })
    });
    EventBus.$on("deleteComment", function (commentId) {
var postIndex = that.document.posts.findIndex(post => post.id == that.post.id);
var commentIndex = that.post.comments.findIndex(comment => comment.id == commentId);
that.document.posts[postIndex].comments.splice(commentIndex,1);
        that.commentService.deleteComment(that.document).then(() => {
      
      })
    });
  },
  }
</script>
<style>
.post_detail {
  background-color: white;
}
.scroll {
  overflow-y: auto;
  width: 100%;
  height: 100%;
  padding-right: 17px; /* Increase/decrease this value for cross-browser compatibility */
  box-sizing: content-box;
}

</style>