<template>
  <div class="sidebar">
    <div class="sidebar--header p2">
      <h1 class="title">Rewardly</h1>
    </div>
    <ul class="sidebar--menu list-reset mt2 mb2">
      <li class="sidebar--menu-li">
        <a v-link="{ 'name': 'dashboard' }"
          class="menu btn block mb1 silver">
          <span class="menu--content">Dashboard</span>
        </a>
      </li>
      <li class="sidebar--menu-li">
        <a v-link="{ 'name': 'transaction' }"
          class="menu btn block mb1 silver">
          <span class="menu--content">Transactions</span>
        </a>
      </li>
      <li class="sidebar--menu-li">
        <a v-link="{ 'name': 'member' }"
          class="menu btn block mb1 silver">
          <span class="menu--content">Members</span>
        </a>
      </li>
      <li class="sidebar--menu-li">
        <a v-link="{ 'name': 'settings' }"
          class="menu btn block mb1 silver">
          <span class="menu--content">Settings</span>
        </a>
      </li>
    </ul>
  </div>
  <div class="content flex-auto">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'HomeView'
  }
</script>

<style scoped>
  @value brandColor, primaryColorLight, primaryColor, bodyBackground from '../../styles/colors.css';
  @value globalPadding, topbar from '../../styles/metrics.css';

  .sidebar {
    background-color: brandColor;
    .title {
      text-align: center;
      margin: 0;
      color: primaryColorLight;
    }
    .sidebar--menu {
      text-align: center;
    }
    .sidebar--menu-li {
      display: inline-block;
      i {
        margin-right: 10px;
      }
      a {
        color: bodyBackground;
      }
    }
  }

  .content {
    background: brandColor;
    padding: 0 globalPadding globalPadding globalPadding;
    @media screen and (min-width: 1000px) {
      padding: 0 calc(globalPadding * 5) calc(globalPadding * 5) calc(globalPadding * 5);
    }
  }
</style>
