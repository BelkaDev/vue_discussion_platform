<template >
<v-container>
  <v-layout>
    <v-flex d-flex>
<hr class="separator right">
<span class="separator text ml-n8 pl-8 pr-8 mr-n8"><slot/></span>
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
  color:#707c97;
  opacity: .4;
  width:100%;
  
}

.separator.text {
  color:#707c97;
  opacity:.8;
  margin-top:-8px;
}
</style>
