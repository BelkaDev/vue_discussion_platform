<template>
          <v-toolbar class="post_toolbar mb-n1" color="white" flat height="80px">

              <iconButton :color="'#979797'" :icon="'mdi-pencil'" :shadow="true"></iconButton>


            <v-spacer></v-spacer>
            <template class="toolbar_buttons">
              <iconButton v-if="!windowProperties.isExpanded" @click="expand" :color="'#979797'" :icon="'mdi-fullscreen'" :shadow="true"></iconButton>
              <iconButton v-if="windowProperties.isExpanded" @click="expand" :color="'#979797'" :icon="'mdi-fullscreen-exit'" :shadow="true"></iconButton>
              <iconButton @click="close" :color="'#979797'" :icon="'mdi-close'" :shadow="true"></iconButton>
            </template>

          </v-toolbar>
</template>



<script>
import iconButton from "@/components/UI/Buttons/iconButton.vue";

export default {
  name: "chatToolbar",
  data: () => ({
    windowProperties: {isExpanded:false,isClosed:false},
  }),

  methods: {
     expand(){
      if (!this.windowProperties.isExpanded) {
      this.expand_icon="mdi-fullscreen-exit"
      this.windowProperties.isExpanded=true;
      } else {
      this.expand_icon="mdi-fullscreen"
      this.windowProperties.isExpanded=false;
      }
    this.$emit("windowPropertiesChanged",this.windowProperties)
    },
    close() {
     this.windowProperties.isClosed=true
     this.$emit("windowPropertiesChanged",this.windowProperties)
    }
  },
  components: {
      iconButton
  }
};
</script>
    


<style >

.chat_title_primary {
  color: #0d1c2e;
  margin-left: 10px;
  margin-bottom: 1em;
  font-size: 20px;
}

.chat_title_secondary {
  color: #2a8bf2;
  font-size: 12px !important;
  margin-left: -7.3em;
  margin-top: 2em;
}

.toolbar_buttons {
    padding: 2px;
    margin: 2px;
}

</style>