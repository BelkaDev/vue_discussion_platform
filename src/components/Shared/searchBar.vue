<template >
  <v-card class="searchBar">
      <v-layout style="2px solid red">
          <v-flex class="my-n4 mx-4" md7> 
                      <v-text-field
            class="searchField my-6"
            flat
            solo
            dense
            id="search"
            ref="search"
            color="primary"
            label="Search"
            prepend-icon="mdi-magnify"
          ></v-text-field>
          
          </v-flex>
          
      <v-divider
      class="divider my-0"
        inset
        vertical
      ></v-divider>

         <v-flex class="mt-2 sortBy"> 
                


                 <v-menu
      :offset-y="100"
        open-on-hover
        close-on-content-click
     
      >
      
        <template v-slot:activator="{ on }">
          <v-btn
            color="grey darken-3"
            text
            v-on="on"
            style="text-transform:none"
          >
          
           Sort By
              <v-icon right class="pb-1">mdi-chevron-down</v-icon> 
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            :href="item.link"
          >
            <v-list-item-title>
              <v-icon>{{item.icon}}</v-icon> {{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
          </v-flex>
      </v-layout>
  </v-card>
</template>

<script>
export default {
  data: () => ({
     items: [
        { title: 'Date', icon: 'mdi-calendar', link: "https://google.com" },
        { title: 'Likes', icon: 'mdi-star', link: "https://google.com" },
      ],
  }),
};
</script>

<style>
.searchField {
  text-align: center;
  
}
.searchBar {
  width:100%;
  height:60px;
}
.divider{
    height:60px;
    opacity:.75;
}
.sortBy * {
    padding-top:5px;
    font-size:14px;
}
</style>
