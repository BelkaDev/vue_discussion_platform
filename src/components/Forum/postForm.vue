<template>
  <v-form ref="form">
      <v-container>
          
      <v-text-field
      v-model="title"
      label="Post title"
      class="mb-1"
     :rules="inputTitle" ></v-text-field>
          
          <v-layout>
            <v-flex xs12 > 

<v-textarea
  v-model="content"
          name="input-7-1"
          label="Post content"
          placeholder="Enter the content of your post."
          :rules="inputContent" 
        ></v-textarea>
          <div >
      <v-btn class="white--text ml-4 my-2" :color="color" :loading="loading" :disabled="loading || title.length < 3 || content.length < 10" @click="create" fab>
        <v-icon>{{buttonIcon}}</v-icon>
      </v-btn>
      </div>
            </v-flex>
      </v-layout>

      </v-container>
      </v-form>
</template>
<script>
import EventBus from "@/utils/eventBus";

export default {
  data () {

    return {
    fab: false,
    color: "#60a9f6",
    dark: false,
    loading: false,
    content:"",
    title:"",
    inputTitle: [ 
	v => v && v.length >= 3 || 'Title must contain at least 3 characters'
  ],
      inputContent: [ 
	v => v && v.length >= 3 || 'Title must contain at least 3 characters'
	],
    buttonIcon: "mdi-send",
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

          var post = {}
          post.title = this.title
          post.content = this.content
          post.likes = []
          post.comments = []
          post.date = "hier"
          post.seen = 0
      EventBus.$emit("createPost",post)     
          this.closeDialog();
        }, 1000));
	}
    },
    initialize(){
          this.loading = false;
          this.timer = null;
          this.buttonIcon="mdi-account-multiple-plus"
          this.color="#60a9f6"
          this.title="";
          this.searchString=""
    },
  },
  mounted() {
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