import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '@/views/login';
import Register from '@/views/register';
import ChatRoom from '@/views/chatroom';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/login'
  }, {
    name: 'login',
    path: '/login',
    component: Login
  }, {
    name: 'register',
    path: '/register',
    component: Register
  }, {
    name: 'chatroom',
    path: '/chatroom',
    component: ChatRoom
  }
];

const router = new VueRouter({
  routes
});

export default router;
