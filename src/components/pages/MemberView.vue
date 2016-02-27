<template>
  <div class="content-page">
    <div class="title-bar">
      <h2 class="title-bar--title">Member</h2>
    </div>
    <div class="content">
      <div class="main">
        <div class="main--content">
          <table>
            <thead>
              <tr>
                <th>Member Name</th>
                <th>Latest Transaction</th>
                <th>Member type</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="member in members.members">
                <td>{{ member.real_name }}</td>
                <td>{{ member.latest_transaction }}</td>
                <td>{{ member.type }}</td>
              </tr>
            </tbody>
          </table>
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

<style scoped>
  table {
    border-top: 1px solid #AAA;
    background-image: linear-gradient(#DEDEDE, #FFF);
    thead tr {
      border-bottom: 1px solid #AAA;
    }
  }
</style>
