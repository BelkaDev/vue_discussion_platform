<template >
<v-container>
  <v-layout>
    <v-flex d-flex>
<hr class="separator right">
<span class="separator text ml-n8 mr-n8"><slot/></span>
<hr class="separator right">
</v-flex>
</v-layout>
</v-container>
</template>

<script>
export default {
  data: () => ({

  }),
};
</script>

<style>
.separator {
  color:grey;
  opacity: .4;
  width:40%;
  
}

.separator.text {
  opacity:.75;
  margin-top:-8px;
}
</style>
