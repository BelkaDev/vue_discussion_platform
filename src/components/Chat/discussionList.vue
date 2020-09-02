<template >
        <v-list id="discussionList">
          <v-list-item-group  v-for="post in posts"
              :key="post.id"
          >
            <chatCard :post="post"/>
          </v-list-item-group>
        </v-list>

</template>



<script>
import chatCard from "./chatCard";

export default {
  name: "",

  data: () => ({
            posts: [
      {
        id :"id",
        "document_id":"document_id",
        title: "title one",
        date: "post_date",
        creator: [
         {
          id: "id",
           "avatar": "avatar",
         }
        ],
        comments: [
          {
          id: "comment_id",
          "content":"comment_content",
          "date": "comment_date",
          "poster": [
            {
              id: "id",
              "avatar":"avatar"
            }
          ]
          }

        ],
        likes: "",

      },
    ]
  }),
    components: {
        chatCard
    },
  methods: {

    },
    
};
</script>

<style>

</style>