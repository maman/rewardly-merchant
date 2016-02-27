<template>
  <div class="content-page">
    <div class="title-bar">
      <h2 class="title-bar--title">Transaction</h2>
    </div>
    <div class="content">
      <div class="main">
        <div class="main--content">
          <table>
            <thead>
              <tr>
                <th>Member Name</th>
                <th>Transaction Date</th>
                <th>Transaction Type</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="transaction in transactions.transactions">
                <td>{{ transaction.member_name }}</td>
                <td>{{ transaction.datetime }}</td>
                <td>{{ transaction.type }}</td>
                <td>{{ transaction.amount }}</td>
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
          store.dispatch(transactionsAction(this.auth.user.id))
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
