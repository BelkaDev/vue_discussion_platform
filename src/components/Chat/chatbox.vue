<template>
  <v-container style="" class="no_padding no_margin">
    <v-col :cols="windowProperties.width" class="fill-height">
      <baseCard style="" class=" mb-0"  >
      <!-- Top bar chat !-->
      
 
      <chatToolbar
       @close="closeWindow($event)"
       @windowPropertiesChanged="updateSize($event)"
      ></chatToolbar>
        <!-- Liste messages !-->
              <messageList  ref="infoBox"  :blocks="message_blocks">
              </messageList>

        <!-- Input message !-->
        <chatInput class="" :label="'Type your message here'" @sendMessage="submitMessage($event)">
        </chatInput>

      </baseCard>
    </v-col>
  </v-container>
</template>

<script>
import baseCard from "@/components/UI/Cards/baseCard.vue";
import chatToolbar from "./chatToolbar";
import chatInput from "./chatInput";
import messageList from "./messageList";

export default {
  data: () => ({
    recent: false,
    windowProperties: {isExpanded:false,isClosed:false},
    message_blocks: [],
    messages: [
      {
        msg: "message1",
        avatar: "https://cdn.vuetifyjs.com/images/john.png",
        sent: false
      },
      {
        msg: "message1",
        avatar: "https://cdn.vuetifyjs.com/images/john.png",
        sent: true
      },
      {
        msg: "message2",
        avatar: "https://cdn.vuetifyjs.com/images/john.png",
        sent: false
      },
      {
        msg: "message2",
        avatar: "https://cdn.vuetifyjs.com/images/john.png",
        sent: false
      },
      {
        msg: "message3",
        avatar: "https://cdn.vuetifyjs.com/images/john.png",
        sent: false
      }
    ]
  }),
  methods: {
    submitMessage(newMessage) {
      var container = this.$el.querySelector("#messageList");
      container.scrollTop = container.scrollHeight;
      let message = {
        msg: newMessage.text,
        avatar: "https://cdn.vuetifyjs.com/images/john.png",
        sent: true
      };
      let last_block=this.message_blocks[this.message_blocks.length-1];
      let last_message=last_block[last_block.length-1];
      if (message.msg == last_message.msg) {
      last_block.push(message)
      } else {
      let new_block=[message];
      this.message_blocks.push(new_block);
      }
      
      this.messageNew.text = null;
    },
      setBlocks() {
      let first_block=[this.messages[0]]
      this.message_blocks.push(first_block)
      for(var i = 1; i < this.messages.length; i++)
      {
        if (this.messages[i-1].msg == this.messages[i].msg) {
          let last_block=this.message_blocks[this.message_blocks.length-1]
          last_block.push(this.messages[i]);
        } else {
          let new_block=[this.messages[i]];
          this.message_blocks.push(new_block)
        }
      }
    },
    updateSize(newProperties) {
      this.windowProperties = newProperties
      this.$emit("layoutPropertiesChanged",{"isExpanded":this.windowProperties.isExpanded,"isClosed":this.windowProperties.isClosed,"component":"chatbox"})
    },
    closeWindow(newProperties) {
      this.windowProperties = newProperties
      this.$emit("layoutPropertiesChanged",{"isExpanded":this.windowProperties.isExpanded,"isClosed":this.windowProperties.isClosed,"component":"chatbox"})
    }
  }, mounted() {
    this.setBlocks();
  },
  components: {
    baseCard,
    chatToolbar,
    chatInput,
    messageList
  }
};
</script>

<style scoped>
.v-textarea {
  line-height: 40px;
}
.scroll {
  overflow-y: auto;
  width: 100%;
  height: 100%;
  padding-right: 17px; /* Increase/decrease this value for cross-browser compatibility */
  box-sizing: content-box;
}
* {
  overflow: hidden;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.no_padding {
  padding:0;
}
.no_margin {
  margin: 0;
}
</style>
