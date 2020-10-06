<template>
  <v-container ref="chatbox" style="" class="no_padding no_margin">
    <v-col :cols="windowProperties.width" class="fill-height"  style="" >
      <baseCard class=" mb-n2"  >

      <!-- Top bar chat !-->
      <chatToolbarSingle v-if="discussion.receivers.length == 1"
       :receiver="discussion.receivers[0]"
       :last_message="last_message_date"
       @close="closeWindow($event)"
       @windowPropertiesChanged="updateSize($event)"
      ></chatToolbarSingle>
      <chatToolbarGroup v-if="discussion.receivers.length > 1"
       :receivers="discussion.receivers"
       :title="discussion.title"
       :last_message="last_message_date"       
       @close="closeWindow($event)"
       @removeMember="removeMember($event)"
       @windowPropertiesChanged="updateSize($event)"
      ></chatToolbarGroup>
        <!-- Liste messages !-->
              <messageList v-if="discussion.messages.length > 0" ref="infoBox" :blocks="message_blocks" :discussion="discussion" :loggedUser="loggedUser.id">
              </messageList>
<div class="empty_conversation" v-else>
  <p style="color:grey; margin-top:40%">the conversation is empty</p>
</div>
        <!-- Input message !-->
        <chatInput  :label="'Type your message here'" @sendMessage="submitMessage($event)" :loggedUser="loggedUser">
        </chatInput>

      </baseCard>
    </v-col>
  </v-container>
</template>

<script> 
import baseCard from "@/components/UI/Cards/baseCard";
import chatToolbarSingle from "@/components/Chat/chatToolbarSingle";
import chatToolbarGroup from "@/components/Chat/chatToolbarGroup";
import messageList from "@/components/Chat/messageList";
import chatInput from "@/components/Chat/chatInput";

import EventBus from "@/utils/eventBus";

import messageService from "@/services/Chat/messageService";



export default {
    props: ["document"],  
  data: () => ({
    id:0,
    messageService: null,
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
      var discussionIndex = this.document.discussions.findIndex(discussion => discussion.id == this.discussion.id);
      newMessage.id = this.document.discussions[discussionIndex].messages.length
      this.document.discussions[discussionIndex].messages.push(newMessage)
      this.messageService.sendMessage(this.document).then(() => {
        that.setBlocks();
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
      if (this.diff_hours(message.date,last_message.date) > 4 || message.sender != last_message.sender) {
      last_block.push(message)
      } else {
      let new_block=[message];
      this.message_blocks.push(new_block);
      }      
    },
      setBlocks() {
      this.message_blocks=[];
      let first_block=[this.discussion.messages[0]]
      this.message_blocks.push(first_block)
      for(var i = 1; i < this.discussion.messages.length; i++)
      {
        if (this.discussion.messages[i-1].sender == this.discussion.messages[i].sender) {
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
      EventBus.$emit("layoutPropertiesChanged",{"isExpanded":this.windowProperties.isExpanded,"isClosed":this.windowProperties.isClosed,"component":"chatbox"})

    },
    closeWindow(newProperties) {
      this.windowProperties = newProperties
      this.$emit("layoutPropertiesChanged",{"isExpanded":this.windowProperties.isExpanded,"isClosed":this.windowProperties.isClosed,"component":"chatbox"})
    },
    refreshMessages(){
      this.messageService.getMessages(this.discussion.id,this.discussion).then((messageList) => {
        this.discussion.messages = messageList;
      })
    },
    removeMember(member) {
    const that = this
var discussionIndex = this.document.discussions.findIndex(discussion => discussion.id == that.discussion.id);
var receiverIndex = this.document.discussions[discussionIndex].receivers.findIndex(receiver => receiver.id == member.id);
  this.document.discussions[discussionIndex].receivers.splice(receiverIndex,1);
    this.messageService.deleteMessage(that.document).then(() => {
        
      })
    }
  },
  computed: {
    last_message_date() {
      if (this.discussion.messages.length > 0)
      return this.discussion.messages[this.discussion.messages.length - 1].date
      else return null
    },
  diff_hours(dt2, dt1) 
  {
  var diff =(dt2.getTime() - dt1.getTime()) / 1000;
  diff /= (60 * 60);
  return Math.abs(Math.round(diff));  
 }

  },
  mounted() {
      this.messageService = new messageService(this.$http,this.$hostname);
      const that = this;
      EventBus.$on("openChat", function (discussion,loggedUser) {

        that.loggedUser=loggedUser
        that.opened=discussion.id
        that.discussion = discussion
        that.setBlocks();
    });
EventBus.$on("updateMessage", function (updatedMessage) {
var discussionIndex = that.document.discussions.findIndex(discussion => discussion.id == that.discussion.id);
var messageIndex = that.document.discussions[discussionIndex].messages.findIndex(message => message.id == updatedMessage.id);
that.document.discussions[discussionIndex].messages[messageIndex] = updatedMessage
        that.messageService.updateMessage(that.document).then(() => {
        that.setBlocks();
        
      })
    });
    EventBus.$on("deleteMessage", function (messageId) {
var discussionIndex = that.document.discussions.findIndex(discussion => discussion.id == that.discussion.id);
var messageIndex = that.document.discussions[discussionIndex].messages.findIndex(message => message.id == messageId);
      that.document.discussions[discussionIndex].messages.splice(messageIndex,1);
        that.messageService.deleteMessage(that.document).then(() => {
        that.setBlocks();
      })
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
.empty_conversation {
  height:400px !important;
}
</style>
