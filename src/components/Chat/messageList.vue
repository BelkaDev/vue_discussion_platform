<template>
  <v-list id="messageList" height="" :style="chatStyle" rounded class="scroll">

    <v-list-item-group>
      
      <ul
        v-for="(block, block_index) in blocks"
        :key="block_index"
      >
        <div v-for="(message, message_index) in block" :key="message_index">
          <!-- time separator !-->
         <separator
          style="margin:40px 6px;float:right"
           v-if="message_index > 0 && diff_hours(message.date,block[message_index -1].date) > 3"> {{ block[message_index -1].date |  moment("from", "now") }}</separator>
          <!-- sent message !-->
          <chatBubble
            :sent="message.sender.id == loggedUser"
            :discussion="discussion"
            :message="message"
            :isFirst="isFirst(block[message_index-1],message)"
            :isLast="message_index == block.length - 1"
          >
           
          <!-- received message !-->
          </chatBubble>
        </div>
      </ul>
    </v-list-item-group>
  </v-list>
</template>

<script>
import chatBubble from "@/components/Chat/chatBubble";
import separator from "@/components/Shared/pageSeparator.vue";

export default {
  name: "",

  props: ["blocks","discussion","loggedUser"],
  data: () => ({
    clientHeight: 0,
    computedHeight: 0,
    chatStyle: "",
    id:0
  }),
  components: {
    chatBubble,
    separator
  },
  methods: {
  diff_hours(dt2, dt1) {
  var diff =(dt2 - dt1);
  return Math.floor((diff % 86400000) / 3600000);
 },
    handleResize() {
      this.clientHeight = window.innerHeight;
      this.setStyle();
    },
    setStyle() {
      this.computedHeight = this.clientHeight - 250;
      this.chatStyle = "height: " + this.computedHeight + "px !important;";
    },
        isSent() {
      return this.message.sender.id == this.loggedUser.id
    },
    isFirst(prev_message,message){
    if (!prev_message) { return true } 
    if(prev_message.sender.id == this.loggedUser && message.sender.id !=this.loggedUser) {
        return true;
    } else if (prev_message.sender != this.loggedUser && message.sender == this.loggedUser) {
      return true;
    } else {
      return false;
    }
    },
    isLast(message,next_message){
    if (!next_message) return true;
    if(message.sender.id == this.loggedUser && next_message.sender.id !=this.loggedUser) {
        return true;
    } else if (message.sender != this.loggedUser && next_message.sender == this.loggedUser) {
      return true;
    } else {
      return false;
    }
    },
  },
  computed: {
  },
  beforeMount() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  }
}
</script>
