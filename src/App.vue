<template>
<v-app>
<div id="app">
  <v-container grid-list-md class="fill-height" >

    <v-layout row wrap justify-space-between>
      
      <v-flex  v-if="!expandRight || isClosed" :class="leftClass">
        <v-layout row wrap class="left_layout pa-0">
    <div class="header">
    <h1 class="header_title">Document Name</h1>
    <div class="header_subtitle">
    <v-flex  d-flex>
    <h3 >Public posts</h3> 
    <v-icon class="header_icon" size="18">mdi-account-group</v-icon>
    </v-flex>
    </div>
    </div>
          <v-flex  d-flex>
            

                <div class="post_list">
                   <v-card >
                  <v-card-text
                    >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Blanditiis aperiam ipsum molestias unde laboriosam corrupti,
                    rem delectus dolorem laborum asperiores? Perferendis
                    exercitationem cumque quaerat omnis non illo maxime, animi
                    corporis!</v-card-text
                  >
                </v-card>
                </div>
 
          </v-flex>
        </v-layout>
      </v-flex>

      <v-flex d-flex v-if="!isClosed" :class="rightClass">
        <v-layout row wrap class="right_layout pl-0">
          <chatbox :key="id" @layoutPropertiesChanged="updateSize($event)" ></chatbox>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>

  </div>
  </v-app>
</template>

<script>
import chatbox from "@/components/Chat/chatbox.vue";
export default {
    data: () => ({
      expandRight:false,
      isClosed:false, // put this in a general layout object
      id:0,
      rightClass: "xs12 sm12 md6 lg7 xl6 child-flex",
      leftClass: "d-flex xs12 sm6 md6 lg5 xl6"
    }),
  components: {
    chatbox
  },
  methods: {
    updateSize(windowProperties) {
      if (windowProperties.isClosed) {
      this.isClosed=true;
      this.leftClass= "d-flex xs12 sm12 md12 lg12 xl12"
      return
      }
      if(!this.expandRight) {
      this.expandRight=true;
      this.rightClass="xs12 sm12 md12 lg12 xl12 child-flex"
      } else {
      this.expandRight=false;
      this.rightClass="xs12 sm12 md6 lg7 xl6 child-flex"
      this.id+=1;
      }
    }
  }

}
</script>


<style lang="scss">


#app {
  float:right;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  border:1px solid ;
  background-color:rgba(42, 139, 242, 0.1);
  padding:0;
  margin:0;
  max-width: 1000px;
  width:1000px;
  height:100%;
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
.header {
  border:2px solid black;
  float:left;
  height:120px;
  font-size: 14px;
  
}
.header_title {
  color:#0D1C2E;
}
.header_subtitle {
  color: #707C97;
  font-size: 12px;
  padding:0;
  margin-right:25px;
}
.header_icon {
  color: #707C97;
  opacity: .7;
  margin-left: 6px;
  margin-top: -4px;
}
.left_layout {
  width: 100%;
  float: left;
  padding: 0;
  margin-top: 1% !important;
  margin-right: 1% !important;
}
.right_layout {
  float: right;
  border: 2px solid red;
  width: 100%;
  margin-top: -2% !important;
  margin-left: 0 !important;
}
.page_header {
border: 2px solid red;
height:100px;
width:100%;
}
.post_list {
  border: 2px solid red;
  margin-top:-35%;

}
</style>
