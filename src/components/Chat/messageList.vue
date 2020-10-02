<template>
  <v-list id="messageList" height="" :style="chatStyle" rounded class="scroll">

    <v-list-item-group>
      
      <ul
        v-for="(block, block_index) in blocks"
        :key="block_index"
      >
        <div v-for="(message, message_index) in block" :key="message_index">
          <!-- sent message !-->
          <chatBubble
            :sent="message.sender.id===loggedUser"
            :discussion="discussion"
            :message="message"
            :isFirst="isFirst(block[message_index-1],message)"
            :isLast="message_index == block.length - 1"
          >
          </chatBubble>
          <!-- received message !-->
        </div>
      </ul>
    </v-list-item-group>
  </v-list>
</template>

<script>
import chatBubble from "./chatBubble";

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
    chatBubble
  },
  methods: {
    handleResize() {
      this.clientHeight = window.innerHeight;
      this.setStyle();
    },
    setStyle() {
      this.computedHeight = this.clientHeight - 250;
      this.chatStyle = "height: " + this.computedHeight + "px !important;";
    },
        isSent() {
      return this.message.sender == this.loggedUser
    },
    isFirst(prev_message,message){
    if (!prev_message) return true;
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
