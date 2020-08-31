<template>
<v-card @click="alert('ok')">
  
    <v-card-title class="pb-0 pt-1">
      <v-list-item-avatar color="grey darken-3">
          <v-img
            class="elevation-6"
            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
          ></v-img>
        </v-list-item-avatar>

      <span class="title font-weight-bold" style="font-size:16px !important;">Luy Robin</span>
        <v-spacer></v-spacer>
      <span class="post_date font-weight-medium">30 minutes ago</span>  
    </v-card-title>
    
      <span class="title font-weight-bold" style="font-size:16px !important;">Topic Title one</span>

    <v-card-text class="">
      Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well.
    </v-card-text>

    <v-card-actions class="mt-n5">
      <v-list-item class="">
  

        <v-row
          align="center"
          justify="end"
          class="post_info ml-n8"
        >
          <v-icon class="post_info_icon mr-2" size="18">mdi-thumb-up</v-icon>
          <span class="subheading mr-3 mt-1" style="color:#707C97 !important" >256</span>
          <v-icon class="post_info_icon mr-2 " size="18" >mdi-forum</v-icon>
          <span class="subheading mr-3 mt-1" style="color:#707C97 !important">45</span>
            <v-icon class="post_info_icon  mr-2" size="18">mdi-eye</v-icon>
          <span class="subheading mr-3 mt-1"  style="color:#707C97 !important">45</span>
        </v-row>
      </v-list-item>
    </v-card-actions>
</v-card>
  
</template>


<script>


  export default {
    data: () => ({
      //
    }),
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