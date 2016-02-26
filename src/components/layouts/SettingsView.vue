<template>
  <div class="content-page">
    <div class="content">
      <div class="content--switcher">
        <ul>
          <li><a v-link="{ 'name': 'profile' }">Profile</a></li>
          <li><a v-link="{ 'name': 'gift' }">Gifts</a></li>
        </ul>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>
