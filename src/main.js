import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import axios from "axios";
import VueRouter from "vue-router";
import discussion from "./document";
import notFound from "@/views/notFound";
import VueDraggable from "vuedraggable";

Vue.config.productionTip = false;
Vue.use(require("vue-moment"));
Vue.use(axios);
Vue.use(VueDraggable);

Vue.use(VueRouter);
const router = new VueRouter({
  routes: [
    { path: "/discussions/:id", component: discussion },
    { path: "/404", component: notFound },
    { path: "*", redirect: "/404" }
  ],
  mode: "history"
});

Vue.prototype.$http = axios;
Vue.prototype.$hostname = "http://localhost:3000";

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount("#app");
