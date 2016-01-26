<template>
  <div class="content-page">
    <div class="title-bar">
      <h2 class="title-bar--title">Statistics</h2>
    </div>
    <div class="content">
      <div class="hero">
        <div class="hero--title topbar clearfix">
          <div class="topbar--main">
            <h3 class="topbar--title">Transaction</h3>
            <span class="topbar--subtitle">15 Sep - 22 Sep 2015</span>
          </div>
          <div class="topbar--widget">
            <button class="btn btn-outline mb1 silver">Select</button>
          </div>
        </div>
        <graph
          class="hero--chart"
          id-chart="ct-hero-chart"
          type="Line"
          :data="heroChart"
          :options="heroOptions"></graph>
      </div>
      <div class="main flex flex-wrap py3 px2">
        <div class="graph col-12 md-col-4">
          <div class="graph-wrap">
            <h1>tes</h1>
          </div>
        </div>
        <div class="graph col-12 md-col-4">
          <div class="graph-wrap">
            <h1>tes</h1>
          </div>
        </div>
        <div class="graph col-12 md-col-4">
          <div class="graph-wrap">
            div.chart
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Graph from './fragments/Graph.vue'

  export default {
    name: 'DashboardView',
    components: { Graph },
    data () {
      return {
        heroChart: {
          labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          series: [
            [7, 6, 9, 10, 8, 10, 14, 13, 16, 14, 17, 19, 20, 31, 32, 26, 36, 28, 31, 40, 26, 26, 43, 47, 55, 30],
            [4, 4, 6, 6, 13, 9, 10, 16, 18, 21, 16, 16, 16, 31, 17, 27, 23, 31, 29, 35, 39, 30, 32, 26, 43, 51, 46],
          ]
        },
        heroOptions: {
          height: '100%',
          showPoint: false,
          showLine: true,
          showArea: true,
          fullWidth: true,
          showLabel: false,
          axisY: {
            showGrid: false,
            showLabel: false,
            offset: 0
          },
          chartPadding: 0
        }
      }
    }
  }
</script>

<style src="../styles/component.css"></style>

<style scoped>
  @value globalPadding, globalRadius from '../styles/metrics.css';
  @value bodyBackground from '../styles/colors.css';

  .main {
    background-color: bodyBackground;
  }

  .hero--chart {
    height: calc(100% - 112px);
    @media (min-width: 769px) {
      height: calc(100% - 52px);
    }
  }

  .graph-wrap {
    margin: 0 globalPadding;
    border-radius: globalRadius;
    box-shadow: 0 0 15px rgba(0, 0, 0, .15);
    min-height: 150px;
  }
</style>
