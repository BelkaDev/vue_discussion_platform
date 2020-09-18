<template>

          <v-toolbar class="chat_toolbar" color="#FAFBFF" flat height="80px">

                 <v-menu
        close-on-content-click
        :offset-y="true"
     
      >
          <template v-slot:activator="{ on }">
           <v-list-item
           :flat="true"
            v-on="on"  
            style="padding:0px !important; margin:0 !important; max-width:155px !important;" >
          <v-list-item-group 
          class="avatar_group"
          v-for="(receiver,index) in receivers.slice(0, 4)"
              :key="receiver.id"
          >
          <v-avatar class="avatar ml-2" :style="'z-index:-'+index"
                    >
              <img
               :src="receiver.avatar" alt="" />
            </v-avatar>
        </v-list-item-group>
           </v-list-item>
          </template>
                  <v-list
        width="250"
        style=""
        offset-y>
          <v-list-item
            v-for="(receiver, index) in receivers"
            :key="index"
          >
            <v-list-item-title >
          <v-avatar size="35" style="float:left;">
              <img :src="receiver.avatar" alt="" />
            </v-avatar>
              <span style="float:left;" class="ml-2 mt-2">{{receiver.name.charAt(0).toUpperCase() + receiver.name.slice(1)}} {{receiver.lastName.charAt(0).toUpperCase() + receiver.lastName.slice(1)}} </span><v-icon @click="removeMember()" size="20" color="red" class="ml-2 mt-2" style="float:right">mdi-close</v-icon>
              </v-list-item-title>
          </v-list-item>
        </v-list>
                 </v-menu>
        
        <v-container style="padding:0 !important">
        <v-layout class="toolbar_title">
          <v-flex d-flex>
            <span class="chat_title_primary">{{title.charAt(0).toUpperCase() + title.slice(1)}}</span>
          </v-flex>
          <v-flex d-flex>


             
            </v-flex>
                </v-layout>
        <v-layout class="bottom_title">
            <span class="chat_title_secondary">Last message 8 hours ago</span>
        </v-layout>
          </v-container>

            <v-spacer></v-spacer>
            <template class="toolbar_buttons">
              <iconButton :color="'#979797'" :icon="'mdi-magnify'" :shadow="true"></iconButton>
              <iconButton v-if="!windowProperties.isExpanded" @click="expand" :color="'#979797'" :icon="'mdi-fullscreen'" :shadow="true"></iconButton>
              <iconButton v-if="windowProperties.isExpanded" @click="expand" :color="'#979797'" :icon="'mdi-fullscreen-exit'" :shadow="true"></iconButton>
              <iconButton @click="close" :color="'#979797'" :icon="'mdi-close'" :shadow="true"></iconButton>
            </template>

          </v-toolbar>
</template>



<script>
import iconButton from "@/components/UI/Buttons/iconButton.vue";


export default {
  name: "chatToolbarGroup",
  props: ["receivers","title"],
  data: () => ({
    windowProperties: {isExpanded:false,isClosed:false},
  }),

  methods: {
     expand(){
      if (!this.windowProperties.isExpanded) {
      this.expand_icon="mdi-fullscreen-exit"
      this.windowProperties.isExpanded=true;
      this.windowProperties.isClosed=false;
      } else {
      this.expand_icon="mdi-fullscreen"
      this.windowProperties.isExpanded=false;
      this.windowProperties.isClosed=false;
      }
    this.$emit("windowPropertiesChanged",this.windowProperties)
    },
    close() {
     this.windowProperties.isClosed=true
     this.$emit("windowPropertiesChanged",this.windowProperties)
    },
    showMembers() {
      alert("ok")
    },
    removeMember() {
      alert("ok")
    }
  },
  components: {
      iconButton,
  },
  mounted() {
    
  }
};
</script>
    


<style scoped>

.chat_title_primary {
  color: #0d1c2e;
  top:20%;
  font-size: 20px;
}

.chat_title_secondary {
  color: #2a8bf2;
  font-size: 12px !important;
}
.toolbar_title * {
  position:fixed;
  display:inline-block !important;
}
.bottom_title {
  margin-left:99px !important;
  margin-top:8px;
}
.toolbar_buttons {
    padding: 2px;
    margin: 2px;
}
.avatar_group {
  margin-left:-38px;
}
.avatar_group:first-child {
  margin-left:0px;
}
.avatar {
  box-shadow: 1px 1px 2px rgba(42, 139, 242, 0.4);
}
.show_members {
  margin-left:120px;
  color: #2a8bf2;
  margin-top:8px;
  font-size: 12px ;
  cursor: pointer;
}
</style>