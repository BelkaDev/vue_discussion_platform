<template>
<v-card class="mx-3" >
  
    <v-card-title class="pb-0 pt-1">
      <v-list-item-avatar color="grey darken-3">
          <v-img
            class="elevation-6"
            :src="post.user.avatar"
          ></v-img>
        </v-list-item-avatar>
      <span class="title username font-weight-bold" style="font-size:16px !important;">{{post.user.name.charAt(0).toUpperCase() + post.user.name.slice(1)}} {{post.user.lastName.charAt(0).toUpperCase() + post.user.lastName.slice(1)}}</span>
        <v-spacer></v-spacer>
      <span class="post_date font-weight-medium">{{post.date}}</span>  
    </v-card-title>
    
      <span class="title font-weight-bold" style="font-size:16px !important; color:#555 !important">{{post.title}}</span>

    <v-card-text class="post_content">
      {{post.content}}
    </v-card-text>

    <v-card-actions class="mt-n5">
      <v-list-item class="">
  

        <v-row
          align="center"
          justify="end"
          class="post_info ml-n8"
        >
          <v-icon @mouseover="hovered=true"
           @mouseout="hovered=false"  
           @click="setLike()"
          class="post_info_icon mr-2" :class="hovered || liked? 'hovered' : ''" size="25">mdi-thumb-up</v-icon>
          <span class="mr-4 mt-1" style="color:#707C97 !important" >{{post.likes.length}}</span>
          <v-icon class="post_info_icon mr-2 mt-1" size="25" >mdi-forum</v-icon>
          <span class=" mr-4 mt-1" style="color:#707C97 !important">{{post.comments.length}}</span>
            <v-icon class="post_info_icon  mr-2" size="25">mdi-eye</v-icon>
          <span class="mr-4 mt-1"  style="color:#707C97 !important">{{post.seen}}</span>
        </v-row>
      </v-list-item>
    </v-card-actions>
</v-card>
  
</template>


<script>

  export default {
    props: ["post"],
    data: () => ({
      hovered:false,
      liked:false,
    }),
    components: {
      
    },
    methods: {
      setLike() {
        if (!this.liked) {
        const connectedUser = {"id":"2","name":"ok","lastName":"bye","avatar":"" }
        const date = ""
        const newLike = {"id":"9","date":date,user:connectedUser}
        this.post.likes.push(newLike)
        this.liked= true;
        } else {
          // remove like here
          this.liked = false;
        }
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
.post_content {
    text-align:left;
}
.username {
  text-transform: capitalize !important;
}
.hovered {
  color:blue !important;
}
</style>