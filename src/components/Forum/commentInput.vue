<template>
<div>
  
        <div class="ml-5 col-md-11 col-xs-11">
            <div class="panel comment-box">
                <div class="panel-body">
                    <textarea
                    id="comment_box"
        v-model="commentContent"

                     placeholder="Enter your comment here, you can edit and delete it after."></textarea>
                </div>
                <div class="panel-footer clearfix">
                  <iconButton 
                  class="mt-4"
                  style="float:right"
                                @click="addComment"
              :icon="'mdi-send'" :shadow="true" :gradient="true"></iconButton>
                </div>
            </div>
        </div>
  </div>


</template>


<script>

import iconButton from "@/components/UI/Buttons/iconButton.vue";

export default {
  name: "",

  props: ["label"],
  data: () => ({
    newComment: {},
    commentContent:''
  }),
    components: {
      iconButton
  },
  methods: {
    addComment() {
      const user = {
        "id":"1",
        "name":"Luy",
        "lastName":"Robin",
        "avatar":"https://cdn.vuetifyjs.com/images/john.png"
    }
    this.newComment.user = user;
    this.newComment.content = this.commentContent
    this.newComment.date =  Date.now();
    this.$emit("addComment",this.newComment)
    this.commentContent = null;
    this.newComment = {};
  }
}

};
</script>

<style lang="scss" scoped>




  .panel-body {
    padding: 0;
  }

  .panel-footer {
    background-color: #fff;
  }


.comment-box.panel {
  //-webkit-box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.025);
  //box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.025);
  
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

}
.comment-box.panel {
  border: none;
  margin-bottom: 20px;

  textarea,
  .btn-primary {
    outline: 0 !important;
  }

  textarea {
    width: 100%;
    min-height: 100px;
    padding: 20px;
    border: none;
    resize: none;
      

    &::-webkit-input-placeholder { /* Chrome/Opera/Safari */
      color: #bdbdbd;
      font-weight: 300;
      font-size: 15px;
    }
    &::-moz-placeholder { /* Firefox 19+ */
      color: #bdbdbd;
      font-weight: 300;
      font-size: 15px;
    }
    &:-ms-input-placeholder { /* IE 10+ */
      color: #bdbdbd;
      font-weight: 300;
      font-size: 15px;
    }
    &:-moz-placeholder { /* Firefox 18- */
      color: #bdbdbd;
      font-weight: 300;
      font-size: 15px;
    }
  }
}

  .media-left,
  .media > .pull-left {
    padding-right: 30px;
  }

</style>
