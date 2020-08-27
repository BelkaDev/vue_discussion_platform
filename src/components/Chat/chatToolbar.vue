<template>
          <v-toolbar color="#FAFBFF" flat height="80px">
            <v-avatar class="ml-2" size="50">
              <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
            </v-avatar>
            <v-toolbar-title class="chat_title_primary">Luy Robin </v-toolbar-title>
            <v-toolbar-title class="chat_title_secondary"
              >Last message 5 hours ago
            </v-toolbar-title>

            <v-spacer></v-spacer>
            <template class="toolbar_icons">
              <v-icon class="toolbar_icon" color="#979797">mdi-magnify</v-icon>


              <v-icon v-if="!windowProperties.isExpanded" @click="expand" class="toolbar_icon" color="#979797">mdi-fullscreen</v-icon>
              <v-icon v-if="windowProperties.isExpanded" @click="expand" class="toolbar_icon" color="#979797">mdi-fullscreen-exit</v-icon>


              <v-icon class="toolbar_icon" color="#979797">mdi-close</v-icon>

          </template>

          </v-toolbar>
</template>



<script>
export default {
  name: "chatToolbar",

  props: {
  },
  data: () => ({
    windowProperties: {isExpanded:false,width:6},
  }),

  methods: {
          expand(){
      if (!this.windowProperties.isExpanded) {
      this.chatboxWidth=12;
      this.expand_icon="mdi-fullscreen-exit"
      this.windowProperties.isExpanded=true;
      } else {
      this.chatboxWidth=6;
      this.expand_icon="mdi-fullscreen"
      this.windowProperties.isExpanded=false;
      }
    this.$emit("windowPropertiesChanged",{"isExpanded":this.isExpanded,"width":this.chatboxWidth})
    }
  }
};
</script>
    


<style >

.toolbar_icon {
  background-color: white !important;
  border-radius: 50%;
  padding:8px;
  opacity: .6;
  margin:5px;
           box-shadow: 
  0px 3px 10px rgba(0,0,0,0.2);
}

.chat_title_primary {
  color: #0d1c2e;
  font-size: 20px;
  margin-left: 10px;
  margin-bottom: 1em;
  font-size: 18px;
}

.chat_title_secondary {
  color: #2a8bf2;
  font-size: 12px;
  margin-left: -6.6em;
  margin-top: 1.8em;
}


</style>