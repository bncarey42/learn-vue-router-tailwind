import Vue from 'vue';
import Router from 'vue-router';
// COMPONENTS
import Home from '@/views/Home.vue';
import Projects from '@/views/Projects';
import Login from '@/views/Login';
import Media from '@/views/Media';
import Guides from '@/views/Guides';
import About from '@/views/About';
import Contact from '@/views/Contact';
import Blog from '@/views/Blog';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', name: 'index', component: Home },
    { path: '/login', name: 'login', component: Login },
    { path: '/about', name: 'about', component: About },  
    { path: '/contact', name: 'contact', component: Contact },  
    { path: '/blog', name: 'blog', component: Blog },

    { path: '/secure', name: 'projects', component: Projects },
    { path: '/secure/projects', name: 'projects', component: Projects },
    { path: '/secure/media', name: 'media', component: Media },
    { path: '/secure/guides', name: 'guides', component: Guides }
  ]
})