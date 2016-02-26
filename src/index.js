import Vue from 'vue'
import Router from 'vue-router'

import Main from 'components/Main.vue'

import HomeView from 'components/layouts/HomeView.vue'
import RegisterView from 'components/layouts/RegisterView.vue'
import LoginView from 'components/layouts/LoginView.vue'
import SettingsView from 'components/layouts/SettingsView.vue'

import DashboardView from 'components/pages/DashboardView.vue'
import TransactionView from 'components/pages/TransactionView.vue'
import MemberView from 'components/pages/MemberView.vue'
import ProfileView from 'components/pages/ProfileView.vue'
import GiftView from 'components/pages/GiftView.vue'

import { capitalize } from 'utils/utilitybelt'

Vue.use(Router)

let engine = new Router()

engine.map({
  '/': {
    name: 'home',
    component: HomeView,
    subRoutes: {
      '/': {
        name: 'dashboard',
        component: DashboardView
      },
      '/transaction': {
        name: 'transaction',
        component: TransactionView
      },
      '/members': {
        name: 'member',
        component: MemberView
      },
      '/settings': {
        name: 'settings',
        component: SettingsView,
        subRoutes: {
          '/profile': {
            name: 'profile',
            component: ProfileView
          },
          '/gift': {
            name: 'gift',
            component: GiftView
          }
        }
      }
    }
  },
  '/register': {
    name: 'register',
    component: RegisterView
  },
  '/login': {
    name: 'login',
    component: LoginView
  }
}).redirect({
  '*': '/',
  '/settings': '/settings/profile'
}).beforeEach(() => {
  window.scrollTo(0, 0)
}).afterEach((route) => {
  let title = document.title.split(' — ')
  document.title = `${title[0]} — ${capitalize(route.to.name)}`
})

const meta = document.createElement('meta')
const renderRoot = document.createElement('div')
meta.name = 'viewport'
meta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
document.head.appendChild(meta)
document.body.appendChild(renderRoot)

if (DEBUG) document.title = `${document.title} - DEBUG`

engine.start(Main, renderRoot)
