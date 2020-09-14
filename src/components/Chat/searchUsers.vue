<template>
  <v-form ref="form">
      <v-container>
          <v-layout>
      <v-text-field
      v-model="title"
      label="Discussion Name"
      class="mb-1"
     :rules="inputRules"
       v-if="searchString.length > 1"></v-text-field>
          </v-layout>
          <v-layout>
            <v-flex xs12 > 
              <v-autocomplete
                v-model="searchString"
                :disabled="isUpdating"
                :items="people"
                :small-chips="true"
                placeholder="user list"
                label="Select one or more users"
                item-text="name"
                item-value="id"
                multiple
                :open-on-click="false"
                :menu-props="{ closeOnClick: true }"
                hide-selected
                open-on-clear
                deletable-chips
                hide-no-data
                :search-input.sync="searchInput"
              >
                
    
                
                <template
                  slot="selection"
                  slot-scope="data"
                >
                  <v-chip
                    :selected="data.selected"
                    close
                    class="chip--select-multi"
                    @input="data.parent.selectItem(data.item)"
                  >
  
                    {{ data.item.name }}
                  </v-chip>
                </template>
                <template
                  slot="item"
                  slot-scope="data"
                >
                  <template >
                    <v-list-tile-avatar>
                      <img class="avatar" :src="data.item.avatar">
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                      <v-list-tile-title v-html="data.item.name"></v-list-tile-title>
                      <v-list-tile-sub-title></v-list-tile-sub-title>
                    </v-list-tile-content>
                  </template>
                </template>
              </v-autocomplete>
            </v-flex>
          <div >
      <v-btn class="white--text ml-4 my-2" :color="color" :loading="loading" :disabled="loading || searchString.length == 0" @click="create" fab>
        <v-icon>{{buttonIcon}}</v-icon>
      </v-btn>
      </div>
      </v-layout>

      </v-container>
      </v-form>
</template>
<script>
import EventBus from "@/utils/eventBus";
export default {
  data () {
    let srcs = {
      1: 'https://cdn.vuetifyjs.com/images/john.png',
      2: 'https://cdn.vuetifyjs.com/images/john.png',
      3: 'https://cdn.vuetifyjs.com/images/john.png',
      4: 'https://cdn.vuetifyjs.com/images/john.png',
      5: 'https://cdn.vuetifyjs.com/images/john.png'
    }

    return {
    fab: false,
    color: "#60a9f6",
    dark: false,
    loading: false,
    title:"",
    inputRules: [ 
	v => v && v.length >= 3 || 'Title must contain at least 3 characters'
	],
    buttonIcon: "mdi-account-multiple-plus",
      searchString:"",
      isUpdating: false,
      people: [
        { id:1, name: 'Sandra Adams', group: 'Sellers', avatar: srcs[1] },
        { id:2,name: 'Willy Wonka', group: 'Sellers', avatar: srcs[2] },
        { id:3,name: 'Trevor Hansen', group: 'Sellers', avatar: srcs[3] },
        { id:4,name: 'Tucker Smith', group: 'Sellers', avatar: srcs[2] },
      ],
    }
  },

  watch: {
    isUpdating (val) {
      if (val) {
        setTimeout(() => (this.isUpdating = false), 3000)
      }
    },
    search () {
        
    }
  },
  methods:{
    closeDialog () {
	EventBus.$emit("closeDialog",true)
    },
    
    create() {
    if(this.$refs.form.validate()){
      (this.loading = true),
        (this.timer = setTimeout(() => {
          this.loading = false;
          this.timer = null;
          this.buttonIcon="mdi-check"
          this.color="#1BC47D"
          this.closeDialog();
        }, 1000));
	}
    },
    initialize(){
        this.loading = false;
          this.timer = null;
          this.buttonIcon="mdi-account-multiple-plus"
          this.color="#60a9f6"
          this.searchString=""
    },
  },
created() { // fire callback when the component is created
	EventBus.$on("newChat",()=>{
	this.initialize()
	})
}
}
</script>
<style>
.v-select.v-select--is-menu-active .v-input__icon--append .v-icon {
    transform: none;
}
.avatar {
    height:50px !important;
    width:50px !important;
    border-radius: 50% !important;
    margin-right:10px;
}

</style>