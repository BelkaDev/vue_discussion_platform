<template >
<span>
 <searchBar @updateList="refreshList($event)" :list="posts" style="margin-top:90px;margin-bottom:20px;"/>
<separator><b>All messages</b></separator>
        <v-list id="discussionList" class="list_layout">
          <v-list-item-group v-for="discussion in discussions"
              :key="discussion.id"
          >
<v-card class="discussion_card pa-2" :id="discussion.id" @click="openChat(discussion)" :class=" discussion.id === selectedIndex ? 'selected_discussion' : ''" >  
    <v-card-title class="pb-0 pt-1">
      <v-list-item-avatar color="grey darken-3">
          <v-img
            class="elevation-6"
            :src="discussion.receivers[0].avatar"
          ></v-img>
        </v-list-item-avatar>
      <span class="title font-weight-bold" style="font-size:16px !important;">{{discussion.receivers[0].name}} {{discussion.receivers[0].lastName}}</span>
        <v-spacer></v-spacer>
      <span class="discussion_date font-weight-medium">{{discussion.date}}</span>  
    </v-card-title>
    

    <v-card-text class="">
      {{discussion.content}}
    </v-card-text>


</v-card>
          </v-list-item-group>
        </v-list>
</span>
</template>



<script>
import EventBus from "@/utils/eventBus";
import searchBar from "@/components/Shared/searchBar";
import separator from "@/components/Shared/separator";


export default {
  name: "",

  data: () => ({
    selectedIndex:0,
    discussions: [
      {
      "id":"1",
      "content":"hello sir how are you today",
      "date":"30 minutes ago",
    "messages": [
      {
        id: "1",
        msg: "message1",
        avatar: "https://cdn.vuetifyjs.com/images/john.png",
        sent: false
      }
    ],
    "sender" : {
        "id":"1",
        "name":"Luy",
        "lastName":"Robin",
        "avatar":""
    },
    "receivers" : [
      {
        "id":"1",
        "name":"Luy",
        "lastName":"Robin",
        "avatar":"https://cdn.vuetifyjs.com/images/john.png"
      }
    ]
    },
     {
      "id":"2",
      "content":"my new work progress",
      "date":"30 minutes ago",
    "messages": [
      {
        id: "1",
        msg: "hola",
        avatar: "https://cdn.vuetifyjs.com/images/john.png",
        sent: false
      },
        {
        id: "2",
        msg: "hola I said ",
        avatar: "https://cdn.vuetifyjs.com/images/john.png",
        sent: false
      },
    ],
    "sender" : {
        "id":"1",
        "name":"Test",
        "lastName":"Name",
        "avatar":""
    },
    "receivers" : [
      {
        "id":"1",
        "name":"test",
        "lastName":"Name",
        "avatar":"https://cdn.vuetifyjs.com/images/john.png"
      }
    ]
    }
    ]
  }),
    components: {
      searchBar,
      separator
    },
  methods: {
  openChat: function(chat){
  this.selectedIndex = chat.id
  this.id+=1;
  EventBus.$emit("openChat",chat)
	}
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

</style>