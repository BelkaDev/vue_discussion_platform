<template>
<v-card outlined class="post_card" >
  
    <v-card-title class="pb-0 pt-1">
      <v-list-item-avatar color="grey darken-3">
          <v-img
            class="elevation-6"
            :src="comment.user.avatar"
          ></v-img>
        </v-list-item-avatar>

<span class="title username font-weight-bold" style="font-size:16px !important;">{{comment.user.name.charAt(0).toUpperCase() + comment.user.name.slice(1)}} {{comment.user.lastName.charAt(0).toUpperCase() + comment.user.lastName.slice(1)}}</span>
        <v-spacer></v-spacer>
      <span class="post_date font-weight-medium">{{comment.date}}</span>  
    </v-card-title>
    

    <v-card-text class="comment_content font-weight-medium">
      {{comment.content}}
    </v-card-text>

</v-card>
  
</template>


<script>


  export default {
    props: ["comment"],
    data: () => ({
      
    }),
    components: {
      
    }
  }
</script>
<style>

.subheading {
  font-size:14px;
}
.post_date {
  color: #707C97 !important;
  font-size: 14px !important;
  padding-top:2px;
}
.post_card {
  margin: 0 10px;
}
.comment_content {
  text-align:left;
  
}
</style>