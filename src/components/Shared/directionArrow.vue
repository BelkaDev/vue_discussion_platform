<template>
<div>
  <div class="things">
  <div class="content">
    <div class="arrow">
      <div class="curve"></div>
      <div class="point"></div>
    </div>
  </div> 
  <div class="content">
  </div>
</div>
</div>
</template>
<script>
export default {
  data: () => ({
    
  }),

  methods: {

  }
};
</script>

<style scoped>
.things > .content {
	transform:rotate(220deg);
  -webkit-box-sizing: border-box; 
	-moz-box-sizing: border-box;    
	box-sizing: border-box;
  position: relative;
}


.arrow {
	position: relative;
}

.arrow .curve {
	border: 2px solid #333;
	border-color: transparent transparent transparent #333;
	height: 200px;
	width: 1200px;
	border-radius: 0px 0 0 150px;
}

.arrow .point {
	position: absolute;
	left: 42px;
	top: 152px;
}

.arrow .point:before, .arrow .point:after {
	border: 1px solid #333;
	height: 25px;
	content: "";
	position: absolute;
}

.arrow .point:before {
	top: -11px;
	left: -11px;
	transform:rotate(-74deg);
	-webkit-transform:rotate(-74deg);
  -moz-transform:rotate(-74deg);
  -ms-transform: rotate(-74deg);
}

.arrow .point:after {
  top: -20px;
	left: 5px;
	transform:rotate(12deg);
	-webkit-transform: rotate(12deg);
  -moz-transform:rotate(12deg);
  -ms-transform: rotate(12deg);
}
</style>