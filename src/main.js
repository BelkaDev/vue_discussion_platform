import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import RichTextEditor from 'rich-text-editor-vuetify'
import router from "./router";

Vue.config.productionTip = false;
Vue.use(RichTextEditor)

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount("#app");
