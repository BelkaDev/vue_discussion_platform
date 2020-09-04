<template>
  <v-app>
    <div id="app">
              <createPost v-show="textEditor" ></createPost>

      <v-container class="fill-height">
          <v-layout  row wrap justify-space-between>

          <v-flex d-flex v-if="!expandRight || isClosed" :class="breakPointLeft">
              <div class="left_layout">
              <div class="header_titles">
                <h1 class="header_title">Document Name</h1>
                <h3 class="header_subtitle">
                  Recent public posts
                  <v-icon class="header_icon  ml-1" size="25"
                    >mdi-account-multiple-outline</v-icon
                  >
                </h3>
              </div>
                    <div class="header_switch">
                    <v-layout >
                      <v-flex d-flex md8 lg12>
                        <v-icon class="mr-4 mb-1" size="36" style="color:#979797"
                          >mdi-earth</v-icon
                        >
      <v-switch
      v-model="isPrivate"
      inset
    ></v-switch>
                        <v-icon class="" size="36" style="color:#979797"
                          >mdi-account-multiple-outline</v-icon
                        >
                      
                      

              <createPost ></createPost>
     
  
                  </v-flex>
                </v-layout>

                    </div>

                  <searchBar style="margin-top:90px;margin-bottom:20px;"/>
<postList v-if="!isPrivate"/>
<discussionList v-else/>
              </div>
          </v-flex>


          <v-flex d-flex v-if="!isClosed || !expandLeft" :class="breakPointRight" >
            <v-layout row wrap class="right_layout pl-0" >
              
<postPage v-show="showPost" :key="id" @layoutPropertiesChanged="updateSize($event)"/>
<chatbox  v-show="showChat" :key="id" @layoutPropertiesChanged="updateSize($event)"/>
            </v-layout>
          </v-flex>
          </v-layout>
      </v-container>
    </div>
  </v-app>
</template>

<script>

import searchBar from "@/components/Shared/searchBar.vue";
import postList from "@/components/Forum/postList.vue";
import createPost from "@/components/Forum/createPost.vue";
import postPage from "@/components/Forum/postPage.vue";

import discussionList from "@/components/Chat/discussionList.vue";
import chatbox from "@/components/Chat/chatbox.vue";

import EventBus from "@/utils/eventBus";


export default {
  data: () => ({
    isPrivate: false,
    expandLeft:true,
    expandRight: false,
    showPost: false,
    textEditor: false,
    showChat: false,
    isClosed: false, // put this in a general layout object
    id: 0,
    breakPointRight: "xs12 sm12 md7 lg7 xl7",
    breakPointLeft: "xs12 sm12 md12 lg12 xl12"
  }),
  components: {
    searchBar,
    postList,
    createPost,
    postPage,
    chatbox,
    discussionList,

  },
  methods: {
    updateSize(windowProperties) {
      if (windowProperties.isClosed) {
        this.isClosed = true;
        this.breakPointLeft = "xs12 sm12 md12 lg12 xl12";
      }
      else if (!this.expandRight) {
        this.expandRight = true;
        this.breakPointRight = "xs12 sm12 md12 lg12 xl12 child-flex";
      } else {
        this.expandRight = false;
        this.breakPointRight = "xs12 sm12 md6 lg7 xl6 child-flex";
        this.id += 1;
      }
    },
    openEditor() {
      alert("ok")
      this.textEditor=true;
    }
  },
    mounted () {
    // called from postList.vue
    const that = this
    EventBus.$on("openPost", function () {
      that.breakPointLeft = "xs12 sm5 md5 lg5 xl5"
      that.expandLeft=false
      that.showPost=true;
      that.showChat=false;
    })
      EventBus.$on("openChat", function () {
      that.breakPointLeft = "xs12 sm5 md5 lg5 xl5"
      that.expandLeft=false
      that.showPost=false;
      that.showChat=true;
      that.isClosed=false;
    })
  }
};
</script>

<style lang="scss">
#app {
  float: right;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rgba(42, 139, 242, 0.1);
  padding: 0;
  margin: 0;
  max-width: 1000px;
  width: 1000px;
  height: 100%;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.left_layout {
  width:100%;
  padding-left:1%;
  padding-top: 5%;
}
.header_title {
  color: #0d1c2e;
  font-size: 30px;
  text-align: left;
}
.header_subtitle {
  color: #707c97;
  margin-left:3px;
  font-size: 16px;
  text-align: left;
}


 .header_switch {
  float:left;
 }

.header_icon {
  color: #707c97;
  opacity: 0.65;
}

.right_layout {
  float: right;
  width: 100%;
  margin-top: -2% !important;
  margin-left: 0 !important;
}
.page_header {
  height: 100px;
  width: 100%;
}
.post_list {
  margin-top: -35%;
}
.chatbox {
  margin: 0px 5px !important;
}
</style>
