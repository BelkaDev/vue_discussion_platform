<template >
        <v-list id="postList" class="list_layout scroll">
          <v-list-item-group  v-for="post in posts"
              :key="post.id"
          >
            <postCard class="mb-5" :post="post"/>
          </v-list-item-group>
        </v-list>

</template>



<script>
import postCard from "./postCard";

export default {
  name: "",

  data: () => ({
        posts: [
      {
        id :"1",
       "document_id":"1",
       "content":  "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well.",
        title: "Nouveau sujet de discussion",
        date: "30 minutes ago",
      "seen": 15,
        "user":
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
          "user":
            {
              id: "id",
              name: "whatever",
              lastName: "whatever",
              "avatar":"https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
            }
          },
                    {
          id: "2",
          "content":"wiiiwwww",
          "date": "10 minutes ago",
          "user": 
            {
              id: "id",
              name: "whatever",
              lastName: "whatever",
              "avatar":"https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
            }
          }

        ],
           likes: [
          {
          id: "1",
          "date": "15 minutes ago",
          "user": 
            {
              id: "id",
              name: "whatever",
              lastName: "whatever",
              "avatar":"https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
            }
          },
                    {
          id: "1",
          "date": "15 minutes ago",
          "user": 
            {
              id: "id",
              name: "whatever",
              lastName: "whatever",
              "avatar":"https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
            }

          },
           ]
      },
            {
        id :"1",
       "document_id":"1",
       "content":  "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well.",
        title: "Nouveau sujet de discussion",
        date: "30 minutes ago",
      "seen": 15,
        "user":
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
          "user": 
            {
              id: "id",
              name: "whatever",
              lastName: "whatever",
              "avatar":"https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
            }
          
          },
                    {
          id: "2",
          "content":"thank you again",
          "date": "10 minutes ago",
          "user": 
            {
              id: "id",
              name: "whatever",
              lastName: "whatever",
              "avatar":"https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
            }
          
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
      },
            {
        id :"1",
       "document_id":"1",
       "content":  "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well.",
        title: "Nouveau sujet de discussion",
        date: "30 minutes ago",
      "seen": 15,
        "user":
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
          id: "2",
          "content":"thank you again",
          "date": "10 minutes ago",
          "user": [
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
      },
            {
        id :"1",
       "document_id":"1",
       "content":  "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well.",
        title: "Nouveau sujet de discussion",
        date: "30 minutes ago",
      "seen": 15,
        "user":
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
          id: "2",
          "content":"thank you again",
          "date": "10 minutes ago",
          "user": [
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
      }, 
    ]
  }),
    components: {
        postCard
    },
  methods: {
    },
    
};
</script>

<style>
.list_layout {
  background-color:transparent   !important;
}

</style>