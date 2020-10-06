<template >
  <v-card 
  elevation="2"
  tile class="searchBar">
      <v-layout >
          <v-flex class="my-n4 mx-4" md9> 
                      <v-text-field
            class="searchField my-6"
            flat
            solo
            dense
            id="search"
            ref="search"
            color="primary"
            :label="message"
            v-model="searchText"            
            prepend-icon="mdi-magnify"
            @keyup="search(searchText)"
          ></v-text-field>
          
          </v-flex>
          
      <v-divider
      class="divider my-0"
        inset
        vertical
        v-if="posts"
      ></v-divider>

         <v-flex 
         v-if="posts"
         class="mt-2 sortBy"> 
                


                 <v-menu
        close-on-content-click
        :offset-y="true"
     
      >
      
        <template v-slot:activator="{ on }">
          <v-btn
            color="#777"
            style="text-transform:none;"
            text
            v-on="on"          >
          
           Sort By
              <v-icon right class="pb-2">mdi-chevron-down</v-icon> 
          </v-btn>
        </template>
        <v-list
        offset-y="10">
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            :href="item.link"
          >
            <v-list-item-title >
              <span class="clickable" @click="sortItems(item.sortBy)"><v-icon>{{item.icon}}</v-icon> {{ item.title }}</span>
              </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
          </v-flex>
      </v-layout>
  </v-card>
</template>

<script>
export default {
  props:["list","posts","message"],
  data: () => ({
     items: [
        { title: 'Date', icon: 'mdi-calendar','sortBy':'date'},
        { title: 'Likes', icon: 'mdi-thumb-up','sortBy':'likes.length'},
        { title: 'Popularity', icon: 'mdi-star','sortBy':'seen'},
      ],
      updatedList: [],
      searchText: "",
  }),
  methods : {
    sortItems(prop)  {
      this.updatedList = this.list
        this.updatedList.sort( (a, b) => {
           return a[prop] > b[prop] ? -1 : 1
        })
	    this.$emit("sortList",this.updatedList)        
    },
    search() {
	  this.$emit("searchList",this.searchText)        
    },
  },
mounted () {
  
}
};
</script>

<style>
.searchField {
  text-align: center;
  
}
.searchBar {
  width:99%;
  height:50px;
}
.divider{
    height:50px !important;
    opacity:0.5;
    border:1px solid #777 !important;
}
.sortBy * {
    padding-top:4px;
}
.clickable {
  cursor:pointer;
}
</style>
