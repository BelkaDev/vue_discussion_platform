<template>
<v-container >
  <v-layout class="post_detail" fill-height>
    <v-flex>
      <div v-if="post">
      <postPageToolbar></postPageToolbar>
      <mainPost :post="post"/>
                <separator class="mt-3">
                  Comments
                </separator>
      <commentList :comments="post.comments"></commentList>
      </div>
    </v-flex>
  </v-layout>
 

</v-container>
</template>


<script>
import postPageToolbar from "./postPageToolbar";
import mainPost from "./mainPost";
import commentList from "./commentList"
import separator from "@/components/Shared/separator.vue";
import EventBus from "@/utils/eventBus";

  export default {
  
    data: () => ({
      post: null
    }),
    components: {
      postPageToolbar,
      mainPost,
      commentList,
      separator
    },
    mounted () {
    const that = this;
    // called from postList.vue
    EventBus.$on("openPost", function (post) {
      
      that.post = post
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