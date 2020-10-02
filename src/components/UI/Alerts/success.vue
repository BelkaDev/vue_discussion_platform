<template>
    <div>
      <v-alert
        :value="true"
        color="success"
        icon="new_releases"
      >
        This is a success alert with a custom icon.
      </v-alert>
  
      <v-alert
        :value="true"
        color="error"
      >
        This is an error alert with no icon.
      </v-alert>
    </div>
</template>

<script>
export default {
  name: "iconButton",

  props: ["icon","color", "shadow","gradient","block","style"],
  data: () => ({
      customClass: "default_button",
      customStyle: "color:white",
  }),

  methods: {  
    handleClick() {
    	this.$emit('click')
    },
  },
    mounted() {

  },
};
</script>

</script>