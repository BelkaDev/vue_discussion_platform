<template>
<v-card hover :id="post.id" @click="openPost(post)" :style=" post.id === selectedIndex ? 'border:2px solid red' : ''" >  
    <v-card-title class="pb-0 pt-1">
      <v-list-item-avatar color="grey darken-3">
          <v-img
            class="elevation-6"
            :src="post.user.avatar"
          ></v-img>
        </v-list-item-avatar>
      <span class="title font-weight-bold" style="font-size:16px !important;">{{post.user.name}} {{post.user.lastName}}</span>
        <v-spacer></v-spacer>
      <span class="post_date font-weight-medium">{{post.date}}</span>  
    </v-card-title>
    
      <span class="title font-weight-bold" style="font-size:16px !important; color:#555">{{post.title}}</span>

    <v-card-text class="">
      {{post.content}}
    </v-card-text>
   
    <v-card-actions class="mt-n5">
      <v-list-item class="">

        <v-row
          align="center"
          justify="end"
          class="post_info ml-n8"
        >
          <v-icon class="post_info_icon mr-2" size="18">mdi-thumb-up</v-icon>
          <span class="subheading mr-3 mt-1" style="color:#707C97 !important" >{{post.comments.length}}</span>
          <v-icon class="post_info_icon mr-2 " size="18" >mdi-forum</v-icon>
          <span class="subheading mr-3 mt-1" style="color:#707C97 !important">{{post.likes.length}}</span>
            <v-icon class="post_info_icon  mr-2" size="18">mdi-eye</v-icon>
          <span class="subheading mr-3 mt-1"  style="color:#707C97 !important">{{post.seen}}</span>
        </v-row>
      </v-list-item>
    </v-card-actions>
</v-card>
  
</template>


<script>
import EventBus from "@/utils/eventBus";


  export default {
    props: ["post"],
    data: () => ({
      id:0,
      selectedIndex: 0
    }),
    components: {
      
    },
    methods : {
  openPost: function(post){
    this.selectedIndex = post.id
      this.id+=1;
  EventBus.$emit("openPost",post)
	}
    }
  }
</script>
<style>
.post_info_icon {
  opacity:.7;
}

.subheading {
  font-size:14px;
}
.post_date {
  color: #707C97 !important;
  font-size: 14px !important;
  padding-top:2px;
}

</style>