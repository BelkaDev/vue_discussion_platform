<template>
<v-app>
<div id="app" >
  <v-container grid-list-md class="fill-height">
    <v-layout row wrap justify-space-between>
      <v-flex d-flex xs12 sm6 md6 lg5 xl6>
        <v-layout row wrap class="left_layout pa-0">

          <v-flex d-flex>
            

                <div class="post_list">
                   <v-card>
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

      <v-flex d-flex xs12 sm12 md6 lg7 xl6 child-flex>
        <v-layout row wrap class="right_layout pl-0">
          <chatbox ></chatbox>
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
  components: {
    chatbox
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

.left_layout {
  width: 100%;
  float: left;
  padding: 0;
  margin-right: 1% !important;
}
.right_layout {
  float: right;
  border: 2px solid red;
  width: 100%;
  margin-top: -12px !important;
  margin-left: 0 !important;
}
.page_header {
border: 2px solid red;
height:100px;
width:100%;
}
.post_list {
  border: 2px solid red;

}
</style>
