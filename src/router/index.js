import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/home'
import Login from '@/view/login'
import About from '@/view/about'
import Test from '@/view/test'

Vue.use(Router)

var router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    }
  ]
})
// BAD
router.beforeEach((to, from, next) => {
  console.log(to, from)
  next()
})
export {router}
