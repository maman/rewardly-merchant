<template>
  <div>
    <h1>Home</h1>
    <ul>
      <li v-for="tes in test">{{ tes.name }}</li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'HomeView',
    data() {
      return {
        test: [
          { name: 'a' },
          { name: 'b' },
          { name: 'c' }
        ]
      }
    }
  }
</script>
