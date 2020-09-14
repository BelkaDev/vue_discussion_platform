<template>
  <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          
          <v-list two-line subheader>
            
            <v-list-tile v-for="item in items2" v-bind:key="item.title" avatar @click="">
              <v-list-tile-avatar>
                <v-icon v-bind:class="[item.iconClass]">{{ item.icon }}</v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                
                  <v-icon color="grey lighten-1">info</v-icon>
                
                
                
              </v-list-tile-action>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
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