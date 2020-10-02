import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import axios from "axios";
import VueRouter from 'vue-router'
import discussion from "./document"

Vue.config.productionTip = false;
Vue.use(require('vue-moment'));
Vue.use(axios);

Vue.use(VueRouter);
const router = new VueRouter({
routes: [
{ path: '/discussions/:id', component:discussion},
],
mode: 'history'
});


Vue.prototype.$http = axios;
Vue.prototype.$hostname = "http://localhost:3000";

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount("#app");
