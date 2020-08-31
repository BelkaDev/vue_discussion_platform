<template >
        <v-list id="messageList" height="" :style="chatStyle" rounded class="scroll">
          <v-list-item-group >
<p>ok</p>
          </v-list-item-group>
        </v-list>

</template>
<script>
export default {

  props: {
  },
  data: () => ({}),

  methods: {}
};
</script>
<style>
.scroll {
  overflow-y: auto;
  width: 100%;
  height: 100%;
  padding-right: 17px; /* Increase/decrease this value for cross-browser compatibility */
  box-sizing: content-box;
}

</style>