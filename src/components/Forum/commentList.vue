<template>
  <v-list id="commentList" class="list_layout">
    <v-list-item-group v-for="comment in comments" :key="comment.id">
      <commentCard
        :loggedUser="loggedUser"
        class="ml-2 mb-5"
        :comment="comment"
      />
    </v-list-item-group>
  </v-list>
</template>

<script>
import commentCard from "./commentCard";

export default {
  props: ["comments", "loggedUser"],
  data: () => ({}),
  components: {
    commentCard
  },
  methods: {}
};
</script>

<style>
.list_layout {
  background-color: transparent !important;
}
</style>
