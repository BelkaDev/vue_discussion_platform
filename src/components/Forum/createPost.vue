<template>
  <v-row justify="center" >
    <v-dialog v-model="dialog" max-width="600" >
      <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      :block="true"
                      :style="'width:200px;'"
                      class="my-3 pa-0 button_gradient"
                      style="margin-left:50px; color:white;"
                                v-bind="attrs"
          v-on="on"
                      ><v-icon class="mr-4 ">mdi-pencil</v-icon> Add new post</v-btn
                    >
      </template>
      
  <div class="form">


      <v-text-field filled
        v-model="title"
        label="Post title"
      />
     
  <rich-text-editor @update="onUpdate"/>

    </div>
    </v-dialog>
  </v-row>
</template>


<script>
import defaultButton from "@/components/UI/Buttons/defaultButton.vue";


export default {
  name: 'RichTextEditPanel',
  data () {
    return {
      text: '',
      title: '',
      content: '',
      dialog: false,
    }
  },
  methods: {
    onUpdate (text) {
      this.text = text
      this.dialog = true;
    },
    components: {
      defaultButton
    }
  }
}
</script>
    


<style >
.default_button {
  opacity: .95;
  text-transform:none !important;

}
.button_gradient {
        background: linear-gradient(to top, rgba(42, 139, 242, 1), rgba(124, 184, 247, 1));
        box-shadow: 0px 0px 3px #2A8BF2;
}

 .button_shadow {
  box-shadow: 
  0px 3px 10px rgba(0,0,0,0.2);
}

.label {
  margin-bottom: 3px;
  display: block;
}
.field {
    margin-bottom: 20px;
}
.form {
  padding: 6px;
  background-color: white !important;
}
</style>