<template >
<span>
    <searchBar
      @updateList="refreshList($event)"
      :list="discussions"
      style="margin-top:90px;margin-bottom:12px;margin-left:6px;"
      v-if="discussions.length > 0"
    />
    
        <v-list id="discussionList" class="list_layout">
          <v-list-item-group v-for="discussion in discussions"
              :key="discussion.id"
          >
          
<v-card class="discussion_card pa-2" :id="discussion.id" @click="openChat(discussion)" :class=" discussion.id === selectedIndex ? 'selected_discussion' : ''" >  
    <v-card-title class="pb-0 pt-1">
      <div v-if="discussion.receivers.length > 1" >
          <v-list-item-group
          class="avatar_group_list"
          v-for="(receiver) in discussion.receivers.slice(0, 4)"
              :key="receiver.id"
          >
              <img
              class="receiver_avatar"
              :style="'z-index:-'+index"
               :src="receiver.avatar" 
               :alt="receiver.name" />
        </v-list-item-group>
        </div>
      <v-list-item-avatar v-else color="grey darken-3">
          <v-img
            class="elevation-6"
            :src="discussion.messages[discussion.messages.length -1].sender.avatar"
          ></v-img>
        </v-list-item-avatar>
      <span v-if="discussion.receivers.length > 1" class="title font-weight-bold" style="font-size:16px !important;">{{discussion.title}}</span>      
      <span v-else class="title font-weight-bold" style="font-size:16px !important;">{{discussion.receivers[0].name}} {{discussion.receivers[0].lastName}}</span>
        <v-spacer></v-spacer>
      <span class="discussion_date font-weight-medium">{{discussion.date | moment("from", "now")}}</span>  
    </v-card-title>
    
<v-layout>
    <v-card-text align="left">

  <span v-if="not_empty(discussion)"> <span style="color:#60A9F6"> {{last_sender(discussion)}} </span> {{last_message(discussion)}} </span>
  <span v-else style="color:grey"> No messages </span>
    </v-card-text>
                  <v-avatar
        class="mr-5 mt-4 white--text"
        style="background-color:#60A9F6"
        size="18"
        v-if="not_empty(discussion)"
      >
      <span style="margin-top:15%"
      align="end"> 1 </span>
      </v-avatar>
      </v-layout>
</v-card>
          </v-list-item-group>
        </v-list>
</span>
</template>



<script>
import EventBus from "@/utils/eventBus";
import searchBar from "@/components/Shared/searchBar";

import discussionService from "@/services/chat/discussionService";

export default {
  name: "",
  props: ["loggedUser","document"],
  data: () => ({
    selectedIndex:0,
    discussions: []
  }),
    components: {
      searchBar,
    },
  methods: {
  openChat: function(chat){
  this.selectedIndex = chat.id
  EventBus.$emit("openChat",chat,this.loggedUser)
  },
  refreshList(newList) {
      this.discussions = newList;
    },
    last_message(discussion){
        return discussion.messages[discussion.messages.length -1].content
    },
    last_sender(discussion){
      if(discussion.messages[discussion.messages.length -1].sender.name)
      return discussion.messages[discussion.messages.length -1].sender.name +':'
    },
    not_empty(discussion) {
      return (discussion.messages.length > 0)
    }
  },

  mounted(){
      const that = this;
      this.discussionService = new discussionService(this.$http,this.$hostname);
      this.discussions = this.document.discussions
      EventBus.$on("createChat", function (discussion) {
      discussion.sender = that.loggedUser
      //discussion.id = that.discussions.length
      that.document.discussions.push(discussion)
      that.discussionService.createDiscussion(that.document)
    })
  }  
};
</script>

<style>
.list_layout {
  background-color:transparent  !important;
}

.discussion_info_icon {
  opacity:.7;
}

.subheading {
  font-size:14px;
}
.discussion_date {
  color: #707C97 !important;
  font-size: 14px !important;
  padding-top:2px;
}
.discussion_card{
  margin: 8px !important;
  margin-bottom:20px !important;
  margin-right:18px !important;

}
.selected_discussion{
 filter: brightness(94%);
  box-shadow: 
  0px -1px 1px white inset,
  6px -1px 1px #C8E6C9 inset
  !important
}
.avatar_group_list {
  display:inline-block;
}
.avatar_group_list {
  margin-left:-18px;
}
.avatar_group_list:first-child {
  margin-left:0px;
}
.avatar_group_list:last-child {
  margin-right:10px;
  
}
.receiver_avatar {
  border-radius:50%;
  margin-top:10px;
  height:40px;
  width:40px;
}
.title {
  color:#666;
}
</style>