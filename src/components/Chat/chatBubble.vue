<template>
<div>
  <div v-if="sent" class="message">
<li class="message_chain me">{{ message.msg }}</li>
                  <v-icon class="message_icon_left">mdi-dots-horizontal</v-icon>
          <p v-if="isLast" class="message_date_left">4 hours ago</p>
  </div>
  <div v-else class="message">
       
    <v-avatar v-if="isFirst" class="message_avatar_right ml-2" size="38">
      <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
    </v-avatar>
    <li class="message_chain him">{{ message.msg }}</li>
    <br style="margin-bottom:8px" />
    <v-icon class="message_icon_right">mdi-dots-horizontal</v-icon>
    <p v-if="isLast" class="message_date_right">4 hours ago</p>
  </div>
  
</div>
</template>
<script>
export default {
  data: () => ({}),
  props: ["message", "sent", "isFirst", "isLast"]
};
</script>

<style>
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
  box-shadow: 2px 5px 15px rgba(42, 139, 242, 0.4);
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
</style>
