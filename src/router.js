import Router from 'vue-router'
import Vue from 'vue'
import Login from '@/components/login/Login'


Vue.use(Router)


const routes = [{
  name: 'login',
  path: '/login',
  component: Login,
}]

const router = new Router({
  routes
});


export default router;