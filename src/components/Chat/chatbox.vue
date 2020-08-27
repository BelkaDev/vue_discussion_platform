<template>
  <v-container height="100%">
    <v-col :cols="chatboxWidth" wrap>
      <baseCard>
        
          <v-toolbar color="#FAFBFF" flat height="80px">
            <v-avatar class="ml-2" size="50">
              <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
            </v-avatar>
            <v-toolbar-title class="title_primary">Luy Robin </v-toolbar-title>
            <v-toolbar-title class="title_secondary"
              >Last message 5 hours ago
            </v-toolbar-title>

            <v-spacer></v-spacer>
            <template class="toolbar_icons">
              <v-icon class="toolbar_icon" color="#979797">mdi-magnify</v-icon>


              <v-icon v-if="!isExpanded" @click="expand" class="toolbar_icon" color="#979797">mdi-fullscreen</v-icon>
              <v-icon v-if="isExpanded" @click="expand" class="toolbar_icon" color="#979797">mdi-fullscreen-exit</v-icon>


              <v-icon class="toolbar_icon" color="#979797">mdi-close</v-icon>

          </template>

          </v-toolbar>
        

        <v-list id="messageList" rounded height="380px" class="scroll">
          <v-list-item-group color="primary">
            <ul
              v-for="(block, block_index) in message_blocks"
              :key="block_index"
              :class="block.sent ? 'text-right' : ''"
            >
            <!-- message chain !-->

            <div v-for="(message,message_index) in block"
            :key="message_index">
              <template>
                <div class="message" v-if="message.sent">
                  <!-- OSEF -->
                  <li class="message_chain me">{{ message.msg }}</li>
                  <v-icon class="message_icon_left">mdi-dots-horizontal</v-icon>
                  <p v-if="message_index==block.length-1" class="message_date_left">4 hours ago</p>
                </div>

                <div class="message" v-else>
                  <!-- received messages !-->
                  <v-avatar v-if="message_index==0" class="message_avatar_right ml-2" size="38">
                    <img
                      src="https://cdn.vuetifyjs.com/images/john.jpg"
                      alt="John"
                    />
                  </v-avatar>
                  <li class="message_chain him">{{ message.msg }}</li>
                  <br style="margin-bottom:8px">
                  <v-icon class="message_icon_right">mdi-dots-horizontal</v-icon>
                  <p v-if="message_index==block.length-1" class="message_date_right">4 hours ago</p>
                </div>
              </template>
        </div>
            </ul>
          </v-list-item-group>
        </v-list>
        <!-- CHAT INPUT !-->
        <v-row class="pt-2">
          <v-col cols="2" class="pr-2 pt-7">
              <v-btn
                fab
                dark
                small
                color="primary"
                class="send_icon"
                @click="sendMessage"
              >
                            <v-icon dark size="22">mdi-plus</v-icon>
              </v-btn>
          </v-col>
          <v-col class="ml-n6" cols="8">
            <v-textarea
              @click:append-outer="sendMessage"
              @keyup.enter="sendMessage"
              v-model="messageNew.text"
              no-resize="noResize"
              label="Type message here"
              rows="1"
              clearable="clearable"
              auto-grow="autoGrow"
            ></v-textarea>
          </v-col>
         <v-col cols="1" class="pr-15 pt-7">
              <v-btn
                fab
                dark
                small
                color="primary"
                class="send_icon"
                @click="sendMessage"
              >
                            <v-icon dark size="22">mdi-send</v-icon>
              </v-btn>
          </v-col>
        </v-row>
      </baseCard>
    </v-col>
  </v-container>
</template>

<script>
import baseCard from "@/components/UI/Cards/baseCard.vue";

export default {
  data: () => ({
    recent: false,
    chatboxWidth: 6,
    message_blocks: [],
    expand_icon: "mdi-fullscreen",
    isExpanded: false,
    messageNew: {
      text: null
    },
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
    sendMessage() {
      var container = this.$el.querySelector("#messageList");
      container.scrollTop = container.scrollHeight;
      let message = {
        msg: this.messageNew.text,
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
    }
  }, mounted() {
    this.setBlocks();
  },
  components: {
    baseCard
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
.title_primary {
  color: #0d1c2e;
  font-size: 20px;
  margin-left: 10px;
  margin-bottom: 1em;
  font-size: 18px;
}
.title_secondary {
  color: #2a8bf2;
  font-size: 12px;
  margin-left: -6.6em;
  margin-top: 1.8em;
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

/* TOOLBAR CSS */
.toolbar_icon {
  background-color: white !important;
  border-radius: 50%;
  padding:8px;
  opacity: .6;
  margin:5px;
           box-shadow: 
  0px 3px 10px rgba(0,0,0,0.2);
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
