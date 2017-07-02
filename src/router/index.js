import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import CompanyList from '@/components/CompanyList'
import Details from '@/components/Details'
import NewCompany from '@/components/NewCompany'
import VeeValidate from 'vee-validate'
import Users from '@/components/Users'

Vue.use(Router)
Vue.use(VeeValidate)

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
        },
        {
          path: '/newCompany', // parent's first child has path as root
          name: 'NewCompany',
          component: NewCompany
        },
        {
          path: '/users', // parent's first child has path as root
          name: 'Users',
          component: Users
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
