import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import CompanyList from '@/components/CompanyList'
import Details from '@/components/Details'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/home',   // parent has no name
      component: Home,
      children: [
        {
          path: '/', // parent's first child has path as root
          name: 'CompanyList',
          component: CompanyList
        }
      ]
    },
    {
      path: '/details',
      name: 'Details',
      component: Details
    }
  ]
})
