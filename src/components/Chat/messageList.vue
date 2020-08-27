<template>
        <v-list id="messageList" rounded height="380px" class="scroll">
          <v-list-item-group >
            <ul
              v-for="(block, block_index) in blocks"
              :key="block_index"
              :class="block.sent ? 'text-right' : ''"
            >
            <div v-for="(message,message_index) in block"
            :key="message_index">

                              <chatBubble v-if="message.sent" :sent="true" :message="message" :isFirst="message_index==0" :isLast="message_index==block.length-1">
                </chatBubble>

                <chatBubble v-else :message="message" :isFirst="message_index==0" :isLast="message_index==block.length-1">
                </chatBubble>

            </div>
            </ul>
          </v-list-item-group>
        </v-list>

</template>



<script>
import chatBubble from "./chatBubble";

export default {
  name: "",

  props: ["blocks"],
  data: () => ({}),
    components: {
        chatBubble
    },
  methods: {}
};
</script>

