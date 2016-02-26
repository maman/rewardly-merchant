<template>
  <div class="main flex flex-wrap px2">
    <h1>Gifts</h1>
    <div class="main--content">
      <div v-for="gift in gifts.gifts"
        class="gift card">
        <img v-bind:src="gift.image" alt="{{ gift.name }}">
        <p>{{ gift.name }}</p>
        <p>{{ gift.description }}</p>
        <p>{{ gift.point }}</p>
        <ul>
          <li><a href>Edit</a></li>
          <li><a href>Delete</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import store from 'flux/store'
  import * as giftActions from 'flux/actions/gifts'
  import { checkAuth } from 'utils/utilitybelt'

  export default {
    data () {
      return {
        auth: store.state.auth,
        gifts: store.state.gifts
      }
    },

    ready () {
      this.$subscribe('gifts')
      if (DEBUG) console.log(store.state)
      checkAuth(store.state, () => {
        this.activate()
      }, () => {
        this.$router.go('/login')
      })
    },

    methods: {
      activate () {
        if (!this.gifts.gifts.length) {
          store.dispatch(giftActions.list(this.auth.user.member_id))
        }
      }
    }
  }
</script>
