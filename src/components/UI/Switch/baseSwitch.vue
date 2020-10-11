<template>
  <v-switch v-model="selection" inset="true"></v-switch>
</template>

<script>
export default {
  name: "BaseSwitch",

  props: {},
  data: () => ({
    selection: true
  }),

  methods: {}
};
</script>
