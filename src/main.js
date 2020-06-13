import Vue from 'vue';
import router from "./router";

require('../public/style.css');

import App from '@/App';
import NavBar from './components/top/NavBar';
import HelloWorld from './components/HelloWorld';

Vue.component('nav-bar', NavBar);
Vue.component('hellow', HelloWorld);
Vue.component('nav-bar', NavBar);



new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

