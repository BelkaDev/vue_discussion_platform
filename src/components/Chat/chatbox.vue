<template>
  <v-container style="" class="no_padding no_margin">
    <v-col :cols="windowProperties.width" class="fill-height">
      <baseCard class=" mb-n2"  >

      <!-- Top bar chat !-->
      <chatToolbarSingle v-if="discussion.receivers.length == 1"
       :receiver="discussion.receivers[0]"
       @close="closeWindow($event)"
       @windowPropertiesChanged="updateSize($event)"
      ></chatToolbarSingle>
      <chatToolbarGroup v-if="discussion.receivers.length > 1"
       :receivers="discussion.receivers"
       :title="discussion.title"
       @close="closeWindow($event)"
       @windowPropertiesChanged="updateSize($event)"
      ></chatToolbarGroup>
        <!-- Liste messages !-->
              <messageList ref="infoBox" :blocks="message_blocks" :discussion="discussion.id" :loggedUser="loggedUser.id">
              </messageList>

        <!-- Input message !-->
        <chatInput  :label="'Type your message here'" @sendMessage="submitMessage($event)" :loggedUser="loggedUser">
        </chatInput>

      </baseCard>
    </v-col>
  </v-container>
</template>

<script>
import baseCard from "@/components/UI/Cards/baseCard.vue";
import chatToolbarSingle from "./chatToolbarSingle";
import chatToolbarGroup from "./chatToolbarGroup";
import chatInput from "./chatInput";
import messageList from "./messageList";
import EventBus from "@/utils/eventBus";

import messageService from "@/services/chat/messageService";

export default {
  data: () => ({
    id:0,
    recent: false,
    loggedUser:null,
    windowProperties: {isExpanded:false,isClosed:false},
    message_blocks: [],
    discussion:null,
  }),
  components: {
    baseCard,
    chatToolbarSingle,
    chatToolbarGroup,
    chatInput,
    messageList
  },
  methods: {
    submitMessage(newMessage) {
      const that = this;
      this.messageService = new messageService(this.$http,this.$hostname);
      newMessage.id = this.discussion.messages.length
      this.discussion.messages.push(newMessage)
      this.messageService.sendMessage(this.discussion.id,this.discussion).then(() => {
        that.refreshMessages();
      });
      var container = this.$el.querySelector("#messageList");
      container.scrollTop = 1000;
      let message = {
        content: newMessage.content,
        sender: newMessage.sender,
        sent: true
      };
      let last_block=this.message_blocks[this.message_blocks.length-1];
      let last_message=last_block[last_block.length-1];
      if (message.content == last_message.content) {
      last_block.push(message)
      } else {
      let new_block=[message];
      this.message_blocks.push(new_block);
      }      
    },
      setBlocks() {
      let first_block=[this.discussion.messages[0]]
      this.message_blocks.push(first_block)
      for(var i = 1; i < this.discussion.messages.length; i++)
      {
        if (this.discussion.messages[i-1].msg == this.discussion.messages[i].msg) {
          let last_block=this.message_blocks[this.message_blocks.length-1]
          last_block.push(this.discussion.messages[i]);
        } else {
          let new_block=[this.discussion.messages[i]];
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
    },
    refreshMessages(){
      this.messageService = new messageService(this.$http,this.$hostname);
      this.messageService.getMessages(this.discussion.id,this.discussion).then((messageList) => {
        this.discussion.messages = messageList;
      })
    }
  }, created() {
      const that = this;
      EventBus.$on("openChat", function (discussion,loggedUser) {

        that.loggedUser=loggedUser
        that.opened=discussion.id
        that.discussion = discussion
        that.message_blocks=[];
        that.setBlocks();
    });
  },

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
