import Vue from 'vue'
import Router from 'vue-router'

import Main from './components/Main.vue'
import HomeView from './components/HomeView.vue'
import RegisterView from './components/RegisterView.vue'
import LoginView from './components/LoginView.vue'
import TransactionView from './components/TransactionView.vue'
import SettingsView from './components/SettingsView.vue'
import ProfileView from './components/ProfileView.vue'
import GiftView from './components/GiftView.vue'

Vue.use(Router)

let engine = new Router()

engine.map({
  '/dashboard': {
    name: 'home',
    component: HomeView,
    subRoutes: {
      '/transaction/:filterOpts': {
        name: 'transaction',
        component: TransactionView
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
}).redirect({
  '*': '/dashboard'
}).beforeEach(() => {
  window.scrollTo(0, 0)
})

const renderRoot = document.createElement('div')
document.body.appendChild(renderRoot)

engine.start(Main, renderRoot)
