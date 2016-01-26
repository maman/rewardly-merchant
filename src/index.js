import Vue from 'vue'
import Router from 'vue-router'

import Main from './components/Main.vue'
import HomeView from './components/HomeView.vue'
import RegisterView from './components/RegisterView.vue'
import LoginView from './components/LoginView.vue'
import DashboardView from './components/DashboardView.vue'
import TransactionView from './components/TransactionView.vue'
import SettingsView from './components/SettingsView.vue'
import ProfileView from './components/ProfileView.vue'
import GiftView from './components/GiftView.vue'

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
      '/transaction/:filterOpts': {
        name: 'transaction',
        component: TransactionView
      },
      '/settings': {
        name: 'settings',
        component: SettingsView,
        subRoutes: {
          '/profile': {
            name: 'profile',
            component: ProfileView
          },
          '/gift/:id': {
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
  '*': '/'
}).beforeEach(() => {
  window.scrollTo(0, 0)
})

const meta = document.createElement('meta')
const renderRoot = document.createElement('div')
meta.name = 'viewport'
meta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
document.head.appendChild(meta)
document.body.appendChild(renderRoot)

engine.start(Main, renderRoot)
