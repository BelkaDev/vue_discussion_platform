<template >
        <v-list id="commentList" class="list_layout">
          <v-list-item-group  v-for="comment in comments"
              :key="comment.id"
          >
            <commentCard class="mb-5" :comment="comment"/>
          </v-list-item-group>
        </v-list>
</template>



<script>
import commentCard from "./commentCard";
import EventBus from "@/utils/eventBus";

export default {
  props: ["comments"],
  data: () => ({
    
  }),
    components: {
        commentCard
    },
  methods: {

    },
    mounted() {
  EventBus.$on("updateComment",(editedCommentId,newCommentContent)=>{
  this.comments.find(comment => comment.id == editedCommentId).content = newCommentContent;
	})
    }
    
};
</script>

<style>
.list_layout {
  background-color:transparent   !important;
}

</style>