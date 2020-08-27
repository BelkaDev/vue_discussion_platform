<template>
  <v-container height="100%">
    <v-col :cols="chatboxWidth" wrap>
      <baseCard>
        
      <chatToolbar></chatToolbar>

        <v-list id="messageList" rounded height="380px" class="scroll">
          <v-list-item-group >
            <ul
              v-for="(block, block_index) in message_blocks"
              :key="block_index"
              :class="block.sent ? 'text-right' : ''"
            >
            <div v-for="(message,message_index) in block"
            :key="message_index">
             
                <template v-if="message.sent">
                <chatBubble :sent="true" :message="message" :isFirst="message_index==0" :isLast="message_index==block.length-1">
                </chatBubble>
                </template>
                <chatBubble v-else :message="message" :isFirst="message_index==0" :isLast="message_index==block.length-1">
                </chatBubble>
        </div>
            </ul>
          </v-list-item-group>
        </v-list>
        <!-- CHAT INPUT !-->
        <!--  !-->
        <chatInput v-on:sendMessage="submitMessage($event)">

        </chatInput>

      </baseCard>
    </v-col>
  </v-container>
</template>

<script>
import baseCard from "@/components/UI/Cards/baseCard.vue";
import chatToolbar from "./chatToolbar";
import chatBubble from "./chatBubble";
import chatInput from "./chatInput";

export default {
  data: () => ({
    recent: false,
    chatboxWidth: 6,
    message_blocks: [],
    expand_icon: "mdi-fullscreen",
    isExpanded: false,
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
    expand(){
      if (!this.isExpanded) {
      this.chatboxWidth=12;
      this.expand_icon="mdi-fullscreen-exit"
      this.isExpanded=true;
      } else {
      this.chatboxWidth=6;
      this.expand_icon="mdi-fullscreen"
      this.isExpanded=false;
      }
    },
  }, mounted() {
    this.setBlocks();
  },
  components: {
    baseCard,
    chatToolbar,
    chatBubble,
    chatInput
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

ul li {
  display: inline-block;
  clear: both;
  padding: 10px;
  font-family: Helvetica, Arial, sans-serif;

}

.me {
  float: right;
  background: #fff;
  border-radius: 10px 10px 0px 10px;
  margin-left: 10%;
  margin-right: 1em;
  margin-bottom: 0.5em;
  margin-top: 0.5em;
  color: #707c97;
  border: 1px solid rgba(112, 124, 151, 0.25);
}

.him {
  float: left;
  background: linear-gradient(to right, #60a9f6, #2a8bf2);
  border-radius: 0px 10px 10px 10px;
  margin-left: 3.5em;
  margin-right: 10%;
  margin-bottom: 0.5em;
  margin-top: -2em;
  color: #fff;
  box-shadow: 
  2px 5px 15px rgba(42, 139, 242, 0.4);
}
.message {
  padding: 0;
  margin: 0;
}
.message_icon_right {
  float: left;
  margin-top: -0.85em;
  margin-left: -2em;
  opacity: 0.6;
}
.message_icon_left {
  float: right;
  margin-top: 0.85em;
  margin-right: -2em;
  opacity: 0.6;
}
.message_date_left {
  color: #707c97;
  opacity: 0.95;
  position: relative;
  float: right;
  font-size: 12px;
  display: block;
  margin-left: 76.5%;
  margin-right: 2em;
  padding: -5px;
}
.message_date_right {
  color: #707c97;
  opacity: 0.75;
  position: relative;
  float: left;
  font-size: 12px;
  display: block;
  margin-left: 5em;
  margin-top: 0px;
  margin-right: 70%;
}
.message_avatar_right {
  position: relative;
  margin-right: 100%;
  top: 6px;
}
/* Messages un envoyés après l'autre */
.message_chain {
  margin-top: 0.2em;
  margin-bottom: 0.1em;
}
.message_chain:not(:first-child) {
  margin-top: -2em;
  box-shadow: 1px 0.5px 3px rgba(42, 139, 242, 0.4);
}

/* INPUT CSS */
.v-textarea {
  opacity:0.5;
}

.send_icon {
    background: linear-gradient(to top, rgba(42, 139, 242, 1), rgba(124, 184, 247, 1));
    box-shadow: 0px 0px 3px #2A8BF2;
}
</style>
