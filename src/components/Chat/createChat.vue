<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" max-width="600">
      <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      :block="true"
                      :style="'width:200px;'"
                      class="my-3 pa-0 button_gradient"
                      style="margin-left:50px; color:white;"
                                v-bind="attrs"
                      v-on="on"
                      @click="newChat()"
                      ><v-icon class="mr-4 mt-n1">mdi-pencil</v-icon> Create new chat</v-btn
                    >
      </template>
<v-container style="background-color:white !important">
<searchUsers></searchUsers>
</v-container>
    </v-dialog>
  </v-row>
</template>


<script>
import searchUsers from "./searchUsers"
import EventBus from "@/utils/eventBus";

export default {
  data () {
    return {
      dialog: false,
    }
  },
  components: {
    searchUsers
  },
  methods: {
  newChat () {
	EventBus.$emit("newChat",true)
	}
  },
  created() {
  const that = this;
  EventBus.$on("closeDialog",()=>{
  that.dialog = false;
	})
  }
};
</script>

