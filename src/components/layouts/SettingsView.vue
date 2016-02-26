<template>
  <div class="content-page">
    <div class="content">
      <div class="content--switcher">
        <ul class="list-reset clearfix center-button">
          <li class="left">
            <a class="btn btn-primary not-rounded"
              v-link="{ 'name': 'profile' }">Profile</a>
          </li>
          <li class="left">
            <a class="btn btn-primary not-rounded"
              v-link="{ 'name': 'gift' }">Gifts</a>
          </li>
        </ul>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>
