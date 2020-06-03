import Vue from "vue";
import App from "./App.vue";
import VueDragscroll from "vue-dragscroll";

Vue.use(VueDragscroll);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");

/*
new Vue({
render: function(h){return h(App)}
})
h는 hyperscript 약자로 html구조를 생성하는 스크립트라는 의미.
*/
