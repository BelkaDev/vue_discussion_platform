<template >
  <v-card tile class="searchBar">
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
            label="Search"
            v-model="searchText"            
            prepend-icon="mdi-magnify"
            @keyup="search(searchText)"
          ></v-text-field>
          
          </v-flex>
          
      <v-divider
      class="divider my-0"
        inset
        vertical
      ></v-divider>

         <v-flex class="mt-2 sortBy"> 
                


                 <v-menu
        close-on-content-click
        :offset-y="true"
     
      >
      
        <template v-slot:activator="{ on }">
          <v-btn
            color="grey darken-3"
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
              <span @click="sortItems(item.sortBy)"><v-icon>{{item.icon}}</v-icon> {{ item.title }}</span>
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
  props:["list"],
  data: () => ({
     items: [
        { title: 'Date', icon: 'mdi-calendar','sortBy':'seen'},
        { title: 'Likes', icon: 'mdi-star','sortBy':'likes.length'},
      ],
      updatedList: [],
      defaultList: [],
      searchText: "",
  }),
  methods : {
    sortItems(prop)  {
      this.updatedList = this.list
        this.updatedList.sort( (a, b) => {
           return a[prop] < b[prop] ? -1 : 1
        })
        this.updateList(this.updatedList);
    },
    search(text) {
      if (!text == "") {
        let newList = this.list
        newList = newList.filter(element => {
        return element.content.toLowerCase().includes(text.toLowerCase())
      })
      this.updateList(newList)
      } else {
      this.updateList(this.defaultList)
      }
    },
    updateList(newList) {
	  this.$emit("updateList",newList)
    }
  },
mounted () {
  this.defaultList = this.list.slice(0)
}
};
</script>

<style>
.searchField {
  text-align: center;
  
}
.searchBar {
  width:100%;
  height:50px;
}
.divider{
    height:50px !important;
    border:2px solid #F5F4FB !important;
}
.sortBy * {
    padding-top:4px;
}
</style>
