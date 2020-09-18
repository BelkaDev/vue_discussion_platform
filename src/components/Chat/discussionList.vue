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
            <v-avatar
        left
        class="ml-5 mt-n1 white--text"
        style="background-color:#60A9F6"
        size="18"
      >
      <span style="margin-top:15%"> 1 </span>
      </v-avatar>
    </v-card-text>


</v-card>
          </v-list-item-group>
        </v-list>
</span>
</template>



<script>
import EventBus from "@/utils/eventBus";
import searchBar from "@/components/Shared/searchBar";


export default {
  name: "",

  data: () => ({
    selectedIndex:0,
    discussions: [
      {
      "id":"1",
      "content":"hello sir how are you today",
      "date":"30 minutes ago",
      "title":"New project",
    "messages": [
      {
        id: "1",
        msg: "message1 \n test",
        avatar: "https://cdn.vuetifyjs.com/images/john.png",
        sent: false
      }
    ],
    "sender" : {
        "id":"1",
        "name":"Luy",
        "lastName":"Robin",
        "avatar":"",
    },
    "receivers" : [
      {
        "id":"1",
        "name":"Luy",
        "lastName":"Robin",
        "avatar":"https://cdn.vuetifyjs.com/images/john.png"
      },
      {
        "id":"2",
        "name":"Lu",
        "lastName":"Robina",
        "avatar":"https://cdn.vuetifyjs.com/images/john.png"
      },
      {
        "id":"3",
        "name":"Luya",
        "lastName":"Robina",
        "avatar":"https://cdn.vuetifyjs.com/images/john.png"
      },
      {
        "id":"4",
        "name":"Luya",
        "lastName":"Robina",
        "avatar":"https://cdn.vuetifyjs.com/images/john.png"
      }
    ]
    },
     {
      "id":"2",
      "content":"my new work progress",
      "date":"30 minutes ago",
      "title":"new chat",
    "messages": [
      {
        id: "1",
        msg: "hola",
        avatar: "https://cdn.vuetifyjs.com/images/john.png",
        sent: false
      },
        {
        id: "2",
        msg: "hola I said ok ok ok ok ok ok ok ok ok ok ok ok ok ok ok ok ok okok ",
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
      },
    ]
    },
    {
      "id":"3",
      "content":"hey hey test",
      "date":"30 minutes ago",
      "title":"new chat",
    "messages": [
      {
        id: "1",
        msg: "hola",
        avatar: "https://cdn.vuetifyjs.com/images/john.png",
        sent: false
      },
        {
        id: "2",
        msg: "hey hey hey",
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
      },
    ]
    }
    ]
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