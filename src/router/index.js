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
import GstBills from '@/components/GstBills'
import FullListBill from '@/components/FullListBill'
import NewGstEntry from '@/components/NewGstEntry'
import PendingGstBills from '@/components/PendingGstBills'
import Statement from '@/components/Statement'
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
      path: '/financial-year/:cid/year/:yid',
      name: 'FinancialYearDashboard',
      component: FinancialYearDashboard
    },
    {
      path: '/financial-month/:cid/year/:yid/month/:mid',
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
              path: '/:cid/year/:yid/month/:mid/pending',
              name: 'PendingDebitBills',
              component: PendingDebitBills
            },
            {
              path: '/:cid/year/:yid/month/:mid/new-debit-entry',
              name: 'NewDebitEntry',
              component: NewDebitEntry
            },
            {
              path: '/:cid/year/:yid/month/:mid/shortcut-list',
              name: 'ShortcutList',
              component: ShortcutList
            },
            {
              path: '/:cid/year/:yid/month/:mid/shortcut-entry',
              name: 'ShortcutEntry',
              component: ShortcutEntry
            }
          ]
        },
        {
          path: '/gst-bills/:cid/year/:yid/month/:mid',
          name: 'GstBills',
          component: GstBills,
          children: [
            {
              path: '/gst-full-list/:cid/year/:yid/month/:mid',
              name: 'FullListBill',
              component: FullListBill
            },
            {
              path: '/new-gst-entry/:cid/year/:yid/month/:mid',
              name: 'NewGstEntry',
              component: NewGstEntry
            },
            {
              path: '/pending-gst-bills/:cid/year/:yid/month/:mid',
              name: 'PendingGstBills',
              component: PendingGstBills
            }
          ]
        },
        {
          path: '/statement',
          name: 'Statement',
          component: Statement
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
