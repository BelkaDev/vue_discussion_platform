<template>
<v-container >
  <v-layout class="post_detail" fill-height>
    <v-flex>
      <postPageToolbar></postPageToolbar>
      <mainPost :post="post"/>
                <separator class="mt-3">
                  Comments
                </separator>
    </v-flex>
  </v-layout>
 

</v-container>
</template>


<script>
import postPageToolbar from "./postPageToolbar";
import mainPost from "./mainPost";
import separator from "@/components/Shared/separator.vue";

  export default {
  
    data: () => ({
      post: {
        id :"1",
       "document_id":"1",
       "content":  "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well.",
        title: "Nouveau sujet de discussion",
        date: "30 minutes ago",
      "seen": 15,
        "creator":
         {
           id: "1",
           name: "Luy",
           lastName: "Robin",
           "avatar": "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light",
         }
        ,
        comments: [
          {
          id: "1",
          "content":"thank you sir",
          "date": "15 minutes ago",
          "poster": [
            {
              id: "id",
              name: "whatever",
              lastName: "whatever",
              "avatar":"https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
            }
          ]
          },
                    {
          id: "2",
          "content":"thank you again",
          "date": "10 minutes ago",
          "poster": [
            {
              id: "id",
              name: "whatever",
              lastName: "whatever",
              "avatar":"https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
            }
          ]
          }

        ],
           likes: [
          {
          id: "1",
          "date": "15 minutes ago",
          "user": [
            {
              id: "id",
              name: "whatever",
              lastName: "whatever",
              "avatar":"https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
            }
          ]
          },
                    {
          id: "1",
          "date": "15 minutes ago",
          "user": [
            {
              id: "id",
              name: "whatever",
              lastName: "whatever",
              "avatar":"https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
            }
          ]
          },
           ]
      }
    }),
    components: {
      postPageToolbar,
      mainPost,
      separator
    }
  }
</script>
<style>
.post_detail {
  background-color: white;
}
</style>