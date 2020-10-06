<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" max-width="600">
      <template v-slot:activator="{ on, attrs }">

                                        <v-btn
                      :block="true"
                      color="#60A9F6"
                      :style="'width:100px; margin-top:14px !important;  text-transform:none !important;'"
                      class="my-3 button_gradient "
                      style="margin-left:94px; color:white;"
                                v-bind="attrs"

                  v-on="on"
                  @click="resetForm()" 
                      ><v-icon class="mr-4" size="18">mdi-pencil</v-icon> Create new Post</v-btn>
      </template>
<v-container style="background-color:white !important">
<postForm></postForm>
</v-container>
    </v-dialog>
  </v-row>
</template>


<script>
import postForm from "./postForm"
import EventBus from "@/utils/eventBus";

export default {
  data () {
    return {
      dialog: false,
    }
  },
methods :{
resetForm() {
EventBus.$emit("resetForm",true)
  
}
},
  components: {
    postForm,
  },
  created() {
  const that = this;
  EventBus.$on("closeDialog",()=>{
  that.dialog = false;
	})
  }
};
</script>
