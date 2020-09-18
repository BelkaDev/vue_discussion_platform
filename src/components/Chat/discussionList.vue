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
      <span class="discussion_date font-weight-medium">{{discussion.date}}</span>  
    </v-card-title>
    
<v-layout>
    <v-card-text align="left">
      {{discussion.messages[discussion.messages.length -1].content}}

    </v-card-text>
                  <v-avatar
        class="mr-5 mt-4 white--text"
        style="background-color:#60A9F6"
        size="18"
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

  data: () => ({
    selectedIndex:0,
    discussions: []
  }),
    components: {
      searchBar,
    },
  methods: {
  openChat: function(chat){
  this.selectedIndex = chat.ids
  EventBus.$emit("openChat",chat)
  },
  refreshList(newList) {
      this.discussions = newList;
    },
  },
  mounted(){
      this.discussionService = new discussionService(this.$http,this.$hostname);
      this.discussionService.getDiscussions().then( discussions => {
        console.log('-----------')
        console.log(discussions)
        console.log('-----------')

        this.discussions = discussions
      });
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