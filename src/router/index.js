import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import CompanyList from '@/components/CompanyList'
import Details from '@/components/Details'
import NewCompany from '@/components/NewCompany'
import VeeValidate from 'vee-validate'
import Users from '@/components/Users'
import CompanyDashboard from '@/components/CompanyDashboard'
import FinancialYearDashboard from '@/components/FinancialYearDashboard'
import FinancialMonthDashboard from '@/components/FinancialMonthDashboard'
import DebitBills from '@/components/DebitBills'
import FullListDebitBill from '@/components/FullListDebitBill'
import PendingDebitBills from '@/components/PendingDebitBills'
import NewDebitEntry from '@/components/NewDebitEntry'
import ShortcutList from '@/components/ShortcutList'
import ShortcutEntry from '@/components/ShortcutEntry'
// import Datepicker from 'vue-bulma-datepicker'

Vue.use(Router)
Vue.use(VeeValidate)
// Vue.use(Datepicker)

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
      path: '/company-dashboard/:cid',
      name: 'CompanyDashboard',
      component: CompanyDashboard
    },
    {
      path: '/financial-year',
      name: 'FinancialYearDashboard',
      component: FinancialYearDashboard
    },
    {
      path: '/financial-month',
      name: 'FinancialMonthDashboard',
      component: FinancialMonthDashboard,
      children: [
        {
          path: '/', // parent's first child has path as root
          name: 'DebitBills',
          component: DebitBills,
          children: [
            {
              path: '/', // parent's first child has path as root
              name: 'FullListDebitBill',
              component: FullListDebitBill
            },
            {
              path: '/pending',
              name: 'PendingDebitBills',
              component: PendingDebitBills
            },
            {
              path: '/new-debit-entry',
              name: 'NewDebitEntry',
              component: NewDebitEntry
            },
            {
              path: '/shortcut-list',
              name: 'ShortcutList',
              component: ShortcutList
            },
            {
              path: '/shortcut-entry',
              name: 'ShortcutEntry',
              component: ShortcutEntry
            }
          ]
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
