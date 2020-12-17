import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '@/views/login';
import Register from '@/views/register';
import ChatRoom from '@/views/chatroom';
import Forget from '@/views/forget';
import UserCheck from '@/components/usercheck';
import ChangePwd from '@/components/changepwd';
import RoomList from '@/components/roomlist';
import Room from '@/components/room';
import UserList from '@/components/userlist';
import User from '@/components/user';

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
    name: 'forget',
    path: '/forget',
    component: Forget,
    children: [{
      name: 'userCheck',
      path: 'usercheck',
      component: UserCheck
    }, {
      name: 'changePwd',
      path: ':username',
      component: ChangePwd
    }]
  }, {
    name: 'chatroom',
    path: '/chatroom',
    component: ChatRoom,
    children: [{
      name: 'room',
      path: 'room',
      component: RoomList,
      children: [{
        name: 'roomid',
        path: ':roomid',
        component: Room
      }]
    }, {
      name: 'user',
      path: 'user',
      component: UserList,
      children: [{
        name: 'username',
        path: ':username',
        component: User
      }]
    }]
  }
];

const router = new VueRouter({
  routes
});

export default router;
