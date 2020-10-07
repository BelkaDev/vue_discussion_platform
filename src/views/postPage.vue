<template>
<v-container>
      <baseCard class=" mb-n2"  >

  <v-layout class="post_detail fill-height" :style="post.comments.length == 0 ?'height:600px':''" >
    <v-flex>
      <div >
      <postPageToolbar
       @addComment="addComment()"
       @close="closeWindow($event)"
       @windowPropertiesChanged="updateSize($event)"
      ></postPageToolbar>
      <mainPost 
      :loggedUser="loggedUser"
      :post="post"
      :isLiked="checkLike" />
                <separator v-if="post.comments.length > 0" class="mt-3">
                  Comments
                </separator>
      <commentList
      v-if="post.comments.length > 0"
       :comments="post.comments"
      :loggedUser="loggedUser"
       ></commentList>
      <div id="comment_input">
      <commentInput
      class="pt-8"
      @addComment="submitComment($event)"
      />
      <alertDialog
      :trigger="alertTrigger"
      :type="alertType"
      :message="alertMessage"
      ></alertDialog>
      <div v-if="post.comments.length  == 0" class="empty_comments"></div>
      </div>

      </div>
    </v-flex>
  </v-layout>
 
      </baseCard>
</v-container>
</template>


<script>
import baseCard from "@/components/UI/Cards/baseCard";

import postPageToolbar from "@/components/Forum/postPageToolbar";
import mainPost from "@/components/Forum/mainPost";
import commentList from "@/components/Forum/commentList"
import commentInput from "@/components/Forum/commentInput"
import separator from "@/components/UI/Shared/pageSeparator.vue";

import EventBus from "@/utils/eventBus";
import alertDialog from "@/components/UI/Alerts/alert";


import commentService from "@/services/Forum/commentService";
import postService from "@/services/Forum/postService";

  export default {
    props: ["loggedUser","document"],  
    data: () => ({
      post: [],
      alertMessage:'',
      alertType:'',
      alertTrigger:false,
    }),
    components: {
      baseCard,
      postPageToolbar,
      mainPost,
      commentList,
      alertDialog,
      commentInput,
      separator
    },
    methods: {
      showAlert(type,msg) {
        this.alertType = type
        this.alertMessage = msg
        this.alertTrigger = true
      },submitComment(newComment) {
      const that = this
      newComment.user = this.loggedUser
      var postIndex = this.document.posts.findIndex(post => post.id == this.post.id);
      newComment.id = this.document.posts[postIndex].comments.length + 1
      this.document.posts[postIndex].comments.push(newComment)
      this.commentService.addComment(this.document).then(() => {
        that.showAlert("success","Created comment successfully")
      }).catch(() => {
        that.showAlert("error","Error creating comment")
      });
      var container = this.$el.querySelector("#commentList");
      container.scrollTop = 1000;
          },
      updateSize(newProperties) {
      this.windowProperties = newProperties
      this.$emit("layoutPropertiesChanged",{"isExpanded":this.windowProperties.isExpanded,"isClosed":this.windowProperties.isClosed,"component":"chatbox"})
      EventBus.$emit("layoutPropertiesChanged",{"isExpanded":this.windowProperties.isExpanded,"isClosed":this.windowProperties.isClosed,"component":"chatbox"})

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
      })
    }
    },
    computed :{
      checkLike() {
    if(this.post.likes.findIndex(like => like.user.id == this.loggedUser.id) == -1) return false
    else return true;
    }
    },
    created () {
    const that = this;
    this.commentService = new commentService(this.$http,this.$hostname);
    this.postService = new postService(this.$http,this.$hostname);
    // called from postList.vue
    EventBus.$on("openPost", function (post) {
    that.alertTrigger = false;
    that.post = post
  var postIndex = that.document.posts.findIndex(post => post.id == that.post.id);    
  that.document.posts[postIndex].seen+=1;
          that.postService.setSeen(that.document).then(() => {
      })
    var container = that.$el.querySelector("#main_post");
    if(container)
    container.scrollIntoView({ behavior: 'smooth', block: 'end' });
    });
        EventBus.$on("updateComment", function (updatedComment) {
var postIndex = that.document.posts.findIndex(post => post.id == that.post.id);
var commentIndex = that.post.comments.findIndex(comment => comment.id == updatedComment.id);
that.document.posts[postIndex].comments[commentIndex] = updatedComment
        that.commentService.updateComment(that.document).then(() => {
      that.showAlert("success","Updated comment successfully")
      }).catch(() => {
        that.showAlert("error","Error updating comment")
      });
    });
    EventBus.$on("deleteComment", function (commentId) {
var postIndex = that.document.posts.findIndex(post => post.id == that.post.id);
var commentIndex = that.post.comments.findIndex(comment => comment.id == commentId);
that.document.posts[postIndex].comments.splice(commentIndex,1);
        that.commentService.deleteComment(that.document).then(() => {
      that.showAlert("success","Deleted comment successfully")
      }).catch(() => {
        that.showAlert("error","Error deleting comment")
      });
    });
     EventBus.$on("updatePost", function (updatedPost) {
var postIndex = that.document.posts.findIndex(post => post.id == updatedPost.id);
that.document.posts[postIndex]= updatedPost
        that.postService.updatePost(that.document).then(() => {
      that.showAlert("success","Updated post successfully")
      }).catch(() => {
        that.showAlert("error","Error updating post")
      });
    });
      EventBus.$on("deletePost", function (postId) {
var postIndex = that.document.posts.findIndex(post => post.id == postId);
that.document.posts.splice(postIndex,1);
        that.postService.deletePost(that.document).then(() => {
        EventBus.$emit("closeWindow",true)
      that.showAlert("success","Deleted post successfully")
      }).catch(() => {
        that.showAlert("error","Error deleting post")
      });
    });
          EventBus.$on("setLike", function (like) {
var postIndex = that.document.posts.findIndex(post => post.id == that.post.id);
like.user = that.loggedUser
like.id = that.document.posts[postIndex].likes.length + 1
// check if not already liked 
var isLiked = that.document.posts[postIndex].likes.findIndex(like => like.user.id == that.loggedUser.id);
if (isLiked == -1) {
that.document.posts[postIndex].likes.push(like)
        that.postService.setLike(that.document).then(() => {
         that.showAlert("success","Liked post")
      }).catch(() => {
        that.showAlert("error","Error")
      });
}
    });
      EventBus.$on("unLike", function () {
var postIndex = that.document.posts.findIndex(post => post.id == that.post.id);
var likeIndex = that.document.posts[postIndex].likes.findIndex(like => like.user.id == that.loggedUser.id);
// check if like exists
if (likeIndex != -1) {
that.document.posts[postIndex].likes.splice(likeIndex,1);
        that.postService.unLike(that.document).then(() => {
      })
}
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
.empty_comments {
  height:150px;
}
</style>