<template>
  <div class="content-page">
    <div class="title-bar">
      <h2 class="title-bar--title">Member</h2>
    </div>
    <div class="content">
      <div class="main">
        <div class="main--content">
          <div v-for="member in members.members"
            class="member card">
            <p>{{ member.real_name }}</p>
            <p>{{ member.type }}</p>
            <ul>
              <li><a href>Detail</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import store from 'flux/store'
  import { members as membersAction } from 'flux/actions/merchant'
  import { get } from 'datasources/member'
  import { checkAuth } from 'utils/utilitybelt'

  export default {
    data () {
      return {
        auth: store.state.auth,
        members: store.state.members
      }
    },

    ready () {
      this.$subscribe('members')
      if (DEBUG) console.debug(store.state)
      checkAuth(store.state, () => {
        this.activate()
      }, () => {
        this.$router.go('/login')
      })
    },

    methods: {
      activate () {
        if (!this.members.members.length) {
          store.dispatch(membersAction(this.auth.user.id))
        }
      }
    }
  }
</script>
