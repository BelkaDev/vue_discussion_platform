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
                <separator class="mt-3">
                  <b>Comments</b>
                </separator>
      <commentList :comments="post.comments"></commentList>
      <div id="comment_input">
      <commentInput/>
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

  export default {
  
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
    }
    },
    created () {
    const that = this;
    // called from postList.vue
    EventBus.$on("openPost", function (post) {
    that.post = post
    var container = that.$el.querySelector("#main_post");
    container.scrollIntoView({ behavior: 'smooth', block: 'end' });
    });
  }
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