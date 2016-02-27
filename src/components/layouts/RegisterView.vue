<template>
  <div class="singlebox--wrapper">
    <div class="singlebox registerbox">
      <validator name="registerValidator">
        <form @submit.prevent="saveMerchant">
          <label class="label"
            for="name">Merchant Name</label>
          <input class="input"
            type="text"
            name="name"
            id="name"
            v-model="name"
            v-validate:name="{ required: true }">
          <map :center="{ lat: location_lat, lng: location_lng }"
            :zoom="15"
            @g-resize="resizeMap()"
            style="width: 100%;height: 300px; display: block">
            <marker :position.sync="{ lat: location_lat, lng: location_lng }"
              :clickable="false"
              :draggable="true"></marker>
          </map>
          <button @click.prevent="locate"
            class="btn btn-primary btn-small mt2 mb2">Locate me</button>
          <label class="label"
            for="msisdn">E-Cash Number</label>
          <input class="input"
            type="number"
            name="msisdn"
            id="msisdn"
            v-bind:class="{ 'disabled': !ecash }"
            v-model="msisdn"
            v-validate:msisdn="{ required: true }">
          <label class="label"
            for="ecash_credentials">E-Cash Credentials</label>
          <input class="input"
            type="password"
            name="ecash_credentials"
            id="ecash_credentials"
            v-bind:class="{ 'disabled': !ecash }"
            v-model="ecash_credentials"
            v-validate:ecash_credentials="{ required: true }">
          <button @click.prevent="checkEcash"
            class="btn btn-primary btn-small mb2">Check</button>
          <div v-bind:class="{'enabled': ecash}"
            class="ecash-validation">
            <label class="label"
              for="username">Username</label>
            <input class="input"
              type="text"
              name="username"
              id="username"
              v-model="username"
              v-validate:username="{ required: true }">
            <label class="label"
              for="password">Password</label>
            <input class="input"
              type="password"
              name="password"
              id="password"
              v-model="password"
              v-validate:password="{ required: true }">
            <label class="label"
              for="image">Image</label>
            <input class="input"
              type="text"
              name="image"
              id="image"
              v-model="image"
              v-validate:image="{ required: true }">
            <label class="label"
              for="description">Merchant Description</label>
            <textarea class="textarea"
              rows="4"
              name="description"
              id="description"
              v-model="description"
              v-validate:description="{ required: true }"></textarea>
            <label class="label"
              for="discount-free">Merchant Discount</label>
            <input class="input"
              type="number"
              name="discount-free"
              id="discount-free"
              v-model="discount_free"
              v-validate:discountfree="{ required: true }">
            <label class="label"
              for="discount-plus">Merchant Discount (Plus)</label>
            <input class="input"
              type="number"
              name="discount-plus"
              id="discount-plus"
              v-model="discount_premium"
              v-validate:discountpremium="{ required: true }">
            <button type="submit"
              class="btn btn-primary"
              v-bind:class="{ 'disabled': !$registerValidator.valid }">Register with Rewardly</button>
          </div>
        </form>
      </validator>
    </div>
  </div>
</template>

<script>
  import http from 'axios'
  import md5 from 'blueimp-md5'
  import store from 'flux/store'
  import { create } from 'flux/actions/merchant'
  import { Map, Marker, PlaceInput } from 'vue-google-maps'
  import { locate as getLocation } from 'utils/utilitybelt'
  import { endpoint } from 'config'

  let initialData = {
    username: '',
    name: '',
    msisdn: '',
    image: '',
    password: '',
    description: '',
    discount_free: '',
    discount_premium: '',
    location_lat: 0,
    location_lng: 0,
    ecash: false,
    ecash_credentials: ''
  }

  export default {
    name: 'RegisterView',

    components: { Map, Marker, PlaceInput },

    data () {
      return initialData
    },

    ready () {
      this.locate()
    },

    methods: {
      locate () {
        getLocation(({ coords }) => {
          // this.location_lat = -6.2313722
          // this.location_lng = 106.8068344
          this.location_lat = coords.latitude
          this.location_lng = coords.longitude
        }, (error) => {
          if (DEBUG) console.warn(`[e]::cannot get location from users ${error.message}`)
        })
      },

      checkEcash () {
        let payload = {
          ecash_credentials: this.$data.ecash_credentials,
          msisdn: this.$data.msisdn
        }
        http({
          method: 'POST',
          url: endpoint.check,
          data: payload
        }).then(() => {
          this.$data.ecash = true
        })
      },

      saveMerchant () {
        let payload = {
          username: this.$data.username,
          name: this.$data.name,
          msisdn: this.$data.msisdn,
          image: this.$data.image,
          password: md5(this.$data.password),
          description: this.$data.description,
          discount_free: this.$data.discount_free,
          discount_premium: this.$data.discount_premium,
          location_lat: this.$data.location_lat,
          location_lng: this.$data.location_lng,
          ecash_credentials: this.$data.ecash_credentials
        }
        store.dispatch(create(payload))
        this.$data = initialData
      }
    }
  }
</script>

<style src="styles/component.css"></style>

<style scoped>
  .ecash-validation {
    display: none;
    &.enabled {
      display: block;
    }
  }
</style>
