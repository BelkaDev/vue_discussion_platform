<template>
  <v-list id="messageList" height="" :style="chatStyle" rounded class="scroll">

    <v-list-item-group>
      <ul
        v-for="(block, block_index) in blocks"
        :key="block_index"
        :class="block.sent ? 'text-right' : ''"
      >
        <div v-for="(message, message_index) in block" :key="message_index">
          <chatBlock
            v-if="message.sent"
            :sent="true"
            :discussion="discussion"
            :message="message"
            :isFirst="message_index == 0"
            :isLast="message_index == block.length - 1"
          >
          </chatBlock>
          <chatBlock
            v-else
            :message="message"
            :discussion="discussion"
            :isFirst="message_index == 0"
            :isLast="message_index == block.length - 1"
          >
          </chatBlock>
        </div>
      </ul>
    </v-list-item-group>
  </v-list>
</template>

<script>
import chatBlock from "./chatBlock";

export default {
  name: "",

  props: ["blocks","discussion"],
  data: () => ({
    clientHeight: 0,
    computedHeight: 0,
    chatStyle: "",
    id:0
  }),
  components: {
    chatBlock
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
  },
  beforeMount() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  }
}
</script>
