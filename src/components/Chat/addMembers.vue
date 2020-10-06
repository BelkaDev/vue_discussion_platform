<template>
<div>
  <v-form ref="form" v-if="users.length > 0">
      <v-container>
          <v-layout>
          </v-layout>
          <v-layout>
            <v-flex xs12 > 
              <v-autocomplete
                v-model="searchString"
                :disabled="isUpdating"
                :items="users"
                :small-chips="true"
                placeholder="user list"
                label="Select one or more users to add"
                item-text="name"
                item-value="id"
                multiple
                :open-on-click="false"
                :menu-props="{ closeOnClick: true }"
                hide-selected
                open-on-clear
                deletable-chips
                hide-no-data
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
  
                    {{ data.item.name  }} {{ data.item.lastName }}
                  </v-chip>
                </template>
                <template
                  slot="item"
                  slot-scope="data"
                >
                  <template >
                    <div>
                      <img class="avatar" :src="data.item.avatar">
                    </div>
                    <div>
                      <div v-html="data.item.name +' '+data.item.lastName"></div>
                    </div>
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

    <div v-else>
        <p style="color:grey;padding-top:15px;">There is no user left to add</p>
      </div>
      </div>
</template>
<script>
import EventBus from "@/utils/eventBus";
import userService from "@/services/User/userService";

export default {
  props: ["receivers"], 
  data () {
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
      users: [],
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
  this.initialize();
    },
    
    create() {
    if(this.$refs.form.validate()){
      (this.loading = true),
        (this.timer = setTimeout(() => {
          this.loading = false;
          this.timer = null;
          this.buttonIcon="mdi-check"
          this.color="#1BC47D"

          var discussion = {}
          const receivers = this.users.filter(e => this.searchString.includes(e.id));
          discussion.title = this.title
          discussion.receivers = receivers
          discussion.date = Date.now();
          discussion.messages = [];
      EventBus.$emit("createChat",discussion)     

          this.closeDialog();

 
        }, 1000));
	}
    },
    initialize(){
          this.loading = false;
          this.timer = null;
          this.color="#60a9f6"
    },
  },
  mounted() {
var userIds = this.receivers.map(function(user) {
  return user.id;
});

    this.userService = new userService(this.$http,this.$hostname);
    this.userService.getUsers().then((users) => {
var filtered_users = users.filter(function(user){
  return !userIds.includes(user.id);
});
      this.users = filtered_users

    })

  },
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