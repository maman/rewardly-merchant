<template>
  <div class="sidebar">
    <div class="sidebar--header p2">
      <h1 class="title">Rewardly</h1>
    </div>
    <ul class="list-reset mt2 mb2">
      <li>
        <a v-link="{ 'name': 'dashboard' }"
          class="menu btn block py3">
          <i class="menu--icon ibm-icon ibm-dashboard"></i>
          <span class="menu--content">Dashboard</span>
        </a>
      </li>
      <li>
        <a v-link="{ 'name': 'settings' }"
          class="menu btn block py3">
          <i class="menu--icon ibm-icon ibm-settings"></i>
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
  @value brandColor, primaryColorLight, primaryColor from '../styles/colors.css';
  @value globalPadding, topbar from '../styles/metrics.css';

  .sidebar {
    width: 10rem;
    background-color: primaryColor;
    .sidebar--header {
      background-color: brandColor;
      padding-bottom: 0;
    }
    .title {
      margin: 0;
      padding: 20px 0;
      font-size: 1.8rem;
    }
    .menu {
      text-decoration: none;
      color: primaryColorLight;
      .menu--content {
        display: inline-block;
        vertical-align: middle;
        margin-left: calc(globalPadding - 5px);
      }
    }
  }

  .content {
    background: brandColor;
  }
</style>

<!--<style scoped>
  .sidebar {
    width: 60px;
    background-color: primaryColor;
    .sidebar--header {
      background-color: brandColor;
      height: topbar;
      overflow: hidden;
    }
    .sidebar--nav {
      ul {
        margin: 0;
        padding: 0;
      }
      li {
        list-style-type: none;
      }
    }
  }
  .menu {
    display: block;
    padding: 20px globalPadding;
    text-transform: uppercase;
    text-decoration: none;
    color: primaryColorLight;
    font-weight: 700;
    .menu--icon {
      display: inline-block;
      font-size: 27px;
    }
    .menu--content {
      display: none;
      vertical-align: middle;
      margin-left: globalPadding
    }
  }
  .container {
    width: calc(100% - 60px);
    background: brandColor;
  }

  @media screen and (min-width: 769px) {
    .sidebar {
      width: 200px;
    }
    .menu {
      padding: calc(globalPadding * 2);
      .menu--icon {
        font-size: 1rem
      }
      .menu--content {
        display: inline-block;
      }
    }
    .container {
      width: calc(100% - 200px);
    }
  }
</style> -->
