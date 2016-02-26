<template>
  <div class="content-page">
    <div class="title-bar">
      <h2 class="title-bar--title">Transaction</h2>
    </div>
    <div class="content">
      <div class="main">
        <div class="main--content">
          <div v-for="transaction in transactions.transactions"
            class="transaction card">
            <p>{{ transaction.member_name }}</p>
            <p>{{ transaction.description }}</p>
            <p>{{ transaction.amount }}</p>
            <p>{{ transaction.datetime }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import store from 'flux/store'
  import { transactions as transactionsAction } from 'flux/actions/merchant'
  import { checkAuth } from 'utils/utilitybelt'
  import getTransaction from 'datasources/transaction'

  export default {
    data () {
      return {
        auth: store.state.auth,
        transactions: store.state.transactions
      }
    },

    ready () {
      this.$subscribe('transactions')
      if (DEBUG) console.debug(store.state)
      checkAuth(store.state, () => {
        this.activate()
      }, () => {
        this.$router.go('/login')
      })
    },

    methods: {
      activate () {
        if (!this.transactions.transactions.length) {
          store.dispatch(transactionsAction(this.auth.user.member_id))
        }
      }
    }
  }
</script>
