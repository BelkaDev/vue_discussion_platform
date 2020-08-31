<template>
<v-card @click="console.log('ok')">
  
    <v-card-title class="pb-0 ">
      <v-list-item-avatar color="grey darken-3">
          <v-img
            class="elevation-6"
            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
          ></v-img>
        </v-list-item-avatar>

      <span class="title font-weight-bold" style="font-size:16px !important;">{{discussion.id}}</span>
        <v-spacer></v-spacer>
      <span class="post_date font-weight-medium">30 minutes ago</span>  
    </v-card-title>
    

    <v-card-text class="">
      Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well.
    </v-card-text>


</v-card>
  
</template>


<script>


  export default {
    data: () => ({

    }),
    props: ["discussion"],
    components: {
      
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