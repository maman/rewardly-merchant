<template>
  <div class="main flex flex-wrap px2">
    <h1>Profile</h1>
    <form @submit.prevent="performEdit">
      <label for="name">Merchant Name</label>
      <input type="text"
        name="name"
        id="name"
        v-model="merchant.merchant.name">
      <label for="description">Merchant Description</label>
      <textarea name="description"
        id="description"
        v-model="merchant.merchant.description"></textarea>
      <fieldset>
        <map :center="merchant.merchant.location"
          :zoom="15"
          style="width: 100%;height: 300px; display: block">
          <place-input :label="'Find place'"></place-input>
        </map>
        <button @click.prevent="locate">Locate me</button>
      </fieldset>
      <fieldset>
        <label for="discount-free">Merchant Discount</label>
        <input type="text"
          name="discount-free"
          id="discount-free"
          v-model="merchant.merchant.discount_free">
        <label for="discount-plus">Merchant Discount (Plus)</label>
        <input type="text"
          name="discount-plus"
          id="discount-plus"
          v-model="merchant.merchant.discount_premium">
      </fieldset>
      <button type="submit">Update details</button>
    </form>
  </div>
</template>

<script>
  import store from 'flux/store'
  import { get, update } from 'flux/actions/merchant'
  import { checkAuth } from 'utils/utilitybelt'
  import { load, Map, Marker, PlaceInput } from 'vue-google-maps'
  import { mapsApiKey } from 'config'

  load(mapsApiKey)

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
          return store.dispatch(get(this.auth.user.member_id))
        }
      },

      locate () {
        if (!navigator.geolocation) {
          if (DEBUG) console.warn(`[w]::user doesn't wan't us to locate them. fuckit.`)
          return
        }
        navigator.geolocation.getCurrentPosition((position) => {
          this.merchant.merchant.location.lat = position.coords.latitude
          this.merchant.merchant.location.lng = position.coords.longitude
        }, (error) => {
          console.log(`error`)
        })
      },

      performEdit () {
        store.dispatch(update(this.auth.user.member_id, this.merchant.merchant))
      }
    }
  }
</script>
