<template>
        <v-row  >
          <v-col cols="1" class="">
          </v-col>
          <v-col class="ml-5" cols="8">
            <v-textarea
              v-model="commentNew.content"
              @click:append-outer="addComment"
              label="Enter your comment here"
              rows="2"
              :no-resize="true"
            ></v-textarea>
          </v-col>
         <v-col cols="1" class="pr-15 pt-8">
              <iconButton
              @click="addComment"
               :icon="'mdi-send'" :shadow="true" :gradient="true"></iconButton>
          </v-col>
        </v-row>
</template>


<script>
import iconButton from "@/components/UI/Buttons/iconButton.vue";


export default {
  name: "",

  props: ["label"],
  data: () => ({
    commentNew: {
      text: null
    }
    
  }),
    components: {
      iconButton
  },
  methods: {
    addComment() {
    this.$emit("addComment",this.commentNew.content)
    this.commentNew.content = null;
  }
}

};
</script>

<style>
.v-textarea {
  opacity:0.5;
}

.send_icon {
    background: linear-gradient(to top, rgba(42, 139, 242, 1), rgba(124, 184, 247, 1));
    box-shadow: 0px 0px 3px #2A8BF2;
}
</style>
