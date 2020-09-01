<template>
  <v-app>
    <div id="app">
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
                    <div class="header_switch" style="float:right;">

                <v-layout row justify-space-between>
                  <v-flex xs4 sm4 md4 lg4 xl4 d-flex class="pa-0">
                      <v-flex d-flex>
                        <v-icon class="mr-4 " size="40" style="color:#979797"
                          >mdi-earth</v-icon
                        >
                        <baseSwitch></baseSwitch>
                        <v-icon class="" size="40" style="color:#979797"
                          >mdi-account-multiple-outline</v-icon
                        >
                      </v-flex>

                  </v-flex>

                  <v-flex >
                    <defaultButton
                      :block="true"
                      :style="'width:200px;'"
                      :gradient="true"
                      class="my-3 pa-0"
                      style="margin-left:50px;"
                      ><v-icon class="mr-4 ">mdi-pencil</v-icon> Add new post</defaultButton
                    >
                  </v-flex>
                </v-layout>
                    </div>


                  <searchBar style="margin-top:90px;margin-bottom:20px;"/>
<postList style="height:50% !important"/>


              </div>
          </v-flex>


          <v-flex d-flex v-if="!isClosed" :class="breakPointRight" >
            <v-layout row wrap class="right_layout pl-0" >
<postPage/>
            </v-layout>
          </v-flex>
          </v-layout>
      </v-container>
    </div>
  </v-app>
</template>

<script>

import baseSwitch from "@/components/UI/Switch/baseSwitch.vue";
import defaultButton from "@/components/UI/Buttons/defaultButton.vue";
import searchBar from "@/components/Shared/searchBar.vue";
import postList from "@/components/Forum/postList.vue";
import postPage from "@/components/Forum/postPage.vue";
export default {
  data: () => ({
    expandRight: false,
    isClosed: false, // put this in a general layout object
    id: 0,
    breakPointRight: "xs12 sm12 md7 lg7 xl7 ",
    breakPointLeft: "xs12 sm5 md5 lg5 xl5"
  }),
  components: {
    
    baseSwitch,
    defaultButton,
    searchBar,
    postList,
    postPage
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
    }
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
  margin-top:2%;
  margin-bottom:2%;
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
