import Vue from 'vue';
import Router from 'vue-router';
// COMPONENTS
import Home from './views/Home.vue';
import Projects from './views/Projects';
import Login from './views/Login';
import Media from './views/Media';
import Guides from './views/Guides';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', name: 'index', component: Home },
    { path: '/projects', name: 'projects', component: Projects },
    { path: '/media', name: 'media', component: Media },
    { path: '/guides', name: 'guides', component: Guides },
    { path: '/login', name: 'login', component: Login }
  
  ]
})