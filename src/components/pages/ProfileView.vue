<template>
  <div class="main flex flex-wrap flex-column px2">
    <h1>Profile</h1>
    <h2>{{ merchant.merchant.msisdn }}</h2>
    <validator name="profileValidator">
      <form @submit.prevent="performEdit"
        novalidate>
        <label class="label"
          for="name">Merchant Name</label>
        <input class="input"
          type="text"
          name="name"
          id="name"
          v-model="merchant.merchant.name">
        <map :center="{lat: merchant.merchant.location_lat, lng: merchant.merchant.location_lng}"
          :zoom="15"
          style="width: 100%;height: 300px; display: block">
          <marker :position.sync="{lat: merchant.merchant.location_lat, lng: merchant.merchant.location_lng}"
            :clickable="false"
            :draggable="true"></marker>
        </map>
        <button @click.prevent="locate"
          class="btn btn-primary btn-small mt2 mb2">Locate me</button>
        <label class="label"
          for="description">Merchant Description</label>
        <textarea class="textarea"
          rows="4"
          name="description"
          id="description"
          v-model="merchant.merchant.description"></textarea>
        <label class="label"
          for="discount-free">Merchant Discount</label>
        <input class="input"
          type="number"
          name="discount-free"
          id="discount-free"
          v-model="merchant.merchant.discount_free">
        <label class="label"
          for="discount-plus">Merchant Discount (Plus)</label>
        <input class="input"
          type="number"
          name="discount-plus"
          id="discount-plus"
          v-model="merchant.merchant.discount_premium">
        <button type="submit"
          class="btn btn-primary mb2"
          v-bind:class="{ 'disabled': !$profileValidator.valid }">Update details</button>
      </form>
    </validator>
  </div>
</template>

<script>
  import store from 'flux/store'
  import { get, update } from 'flux/actions/merchant'
  import { checkAuth, locate as getLocation } from 'utils/utilitybelt'
  import { Map, Marker, PlaceInput } from 'vue-google-maps'

  export default {
    name: 'ProfileView',

    components: { Map, Marker, PlaceInput },

    data () {
      return {
        auth: store.state.auth,
        merchant: store.state.merchant,
        maps: {
          location: ''
        }
      }
    },

    ready () {
      this.$subscribe('merchant')
      if (DEBUG) console.debug(store.state)
      checkAuth(store.state, () => {
        this.activate()
      }, () => {
        this.$router.go('/login')
      })
    },

    methods: {
      activate () {
        if (!this.merchant.merchant.id) {
          return store.dispatch(get(this.auth.user.id))
        }
      },

      locate () {
        getLocation(({ coords }) => {
          this.merchant.merchant.location_lat = coords.lat
          this.merchant.merchant.location_lng = coords.lng
        }, (error) => {
          if (DEBUG) console.warn(`[e]::cannot get location from users ${error.message}`)
        })
      },

      performEdit () {
        store.dispatch(update(this.auth.user.id, this.merchant.merchant))
      }
    }
  }
</script>
