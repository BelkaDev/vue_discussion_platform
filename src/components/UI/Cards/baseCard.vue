<template>
  <v-card class="mb-7">
    <slot />
      <v-spacer></v-spacer>
    <v-divider></v-divider>
  </v-card>
</template>

<script>
export default {
  name: "BaseCard",

  props: {
  },
  data: () => ({}),

  methods: {}
};
</script>
