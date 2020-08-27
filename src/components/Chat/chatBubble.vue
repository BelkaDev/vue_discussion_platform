<template>
<div >
    <v-card class=""
            max-width="344"
            color="blue"
            shaped="true"
            hover
            link
            href="">

      <v-card-subtitle>
        Army Knowledge Online
      </v-card-subtitle>
  

  
      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>
  
          <v-card-text>
            Army Knowledge Online provides web-based enterprise information services to the United States Army, joint, and Department of Defense customers.
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>

</div>
</template>
<script>

export default {
  data: () => ({

  })
}
</script>