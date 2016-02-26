<template>
  <div class="singlebox--wrapper">
    <div class="singlebox loginbox">
      <form @submit.prevent="performAuth">
        <label class="label"
          for="merchant-name">Merchant Name</label>
        <input class="input"
          type="text"
          id="merchant-name"
          name="merchant-name"
          v-model="loginData.username"
          lazy>
        <label class="label"
          for="merchant-password">Password</label>
        <input class="input"
          type="password"
          id="merchant-password"
          name="merchant-password"
          v-model="loginData.password"
          lazy>
        <button class="btn btn-primary"
          type="submit">Login</button>
      </form>
      <a v-link="{ 'name': 'register' }">Belum memiliki account? daftar disini</a>
    </div>
  </div>
</template>

<script>
  import md5 from 'blueimp-md5'
  import store from 'flux/store'
  import { auth as authAction } from 'flux/actions/auth'
  import { checkAuth } from 'utils/utilitybelt'

  export default {
    name: 'LoginView',

    data () {
      return {
        auth: store.state.auth,
        loginData: {
          username: '',
          password: ''
        }
      }
    },

    ready () {
      this.$subscribe('auth')
      if (DEBUG) console.debug(store.state)
      checkAuth(store.state, () => {
        this.$router.go('/')
      }, () => {
        console.log('loginfirst')
      })
    },

    watch: {
      auth: 'checkAuth'
    },

    methods: {
      performAuth () {
        this.loginData.password = md5(this.loginData.password)
        store.dispatch(authAction(this.loginData))
        this.loginData.username = ''
        this.loginData.password = ''
      },

      checkAuth () {
        if (this.auth.user.msisdn) {
          this.$router.go({ path: '/' })
        }
      }
    }
  }
</script>

<style src="styles/component.css"></style>

<style scoped>

</style>
