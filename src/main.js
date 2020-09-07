import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import RichTextEditor from "rich-text-editor-vuetify";
import router from "./router";
import axios from "axios";



Vue.config.productionTip = false;
Vue.use(RichTextEditor);
Vue.use(axios);

Vue.prototype.$http = axios;
Vue.prototype.$hostname = "http://localhost:3000";

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount("#app");
