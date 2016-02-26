<template>
  <div class="content-page">
    <div class="content">
      <div class="main flex flex-wrap py2 px2">
        <div class="graph col-12 md-col-4 py2 graph--text--only graph-1">
          <div class="graph-wrap">
            <graph
              class="chart basic-chart basic-chart-1"
              id-chart="ct-basic-chart-1"
              type="Line"
              :data="charts.chart1.config"
              :options="charts.chart1.options"></graph>
            <div class="text">
              <span class="number">42</span>
              <span class="explanation">member count</span>
            </div>
          </div>
        </div>
        <div class="graph graph-2 col-12 md-col-4 py2 graph--text--only">
          <div class="graph-wrap">
            <graph
              class="chart basic-chart basic-chart-2"
              id-chart="ct-basic-chart-2"
              type="Line"
              :data="charts.chart2.config"
              :options="charts.chart2.options"></graph>
            <div class="text">
              <span class="number">78</span>
              <span class="explanation">transaction count</span>
            </div>
          </div>
        </div>
        <div class="graph graph-3 col-12 md-col-4 py2 graph--text--only">
          <div class="graph-wrap">
            <graph
              class="chart basic-chart basic-chart-3"
              id-chart="ct-basic-chart-3"
              type="Line"
              :data="charts.chart3.config"
              :options="charts.chart3.options"></graph>
            <div class="text">
              <span class="number">450.000</span>
              <span class="explanation">transaction revenue</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hero">
        <div class="hero--title topbar clearfix">
          <div class="topbar--main">
            <h3 class="topbar--title">Total Revenue</h3>
            <span class="topbar--subtitle">Gift - Payment Transaction</span>
          </div>
        </div>
        <graph
          class="hero--chart"
          id-chart="ct-hero-chart"
          type="Line"
          :data="hero.config"
          :options="hero.options"></graph>
      </div>
    </div>
  </div>
</template>

<script>
  import store from 'flux/store'
  import { checkAuth } from 'utils/utilitybelt'
  import Graph from 'components/fragments/Graph.vue'

  export default {
    name: 'DashboardView',

    components: { Graph },

    data () {
      return {
        hero: {
          config: {
            labels: ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'],
            series: [
              [26, 26, 30, 40, 43, 47, 55],
              [26, 30, 32, 39, 43, 46, 51],
            ]
          },
          options: {
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
        },
        charts: {
          chart1: {
            config: {
              labels: ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'],
              series: [
                [11, 26, 26, 30, 43, 47, 55]
              ]
            },
            options: {
              height: '100%',
              showPoint: false,
              showLine: true,
              showArea: false,
              fullWidth: true,
              showLabel: false,
              axisY: {
                showGrid: false,
                showLabel: false,
                offset: 0
              },
              axisX: {
                showGrid: false,
                showLabel: false,
                offset: 0
              },
              chartPadding: 0
            }
          },
          chart2: {
            config: {
              labels: ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'],
              series: [
                [4, 4, 6, 6, 9, 13, 14]
              ]
            },
            options: {
              height: '100%',
              showPoint: false,
              showLine: true,
              showArea: false,
              fullWidth: true,
              showLabel: false,
              axisY: {
                showGrid: false,
                showLabel: false,
                offset: 0
              },
              axisX: {
                showGrid: false,
                showLabel: false,
                offset: 0
              },
              chartPadding: 0
            }
          },
          chart3: {
            config: {
              labels: ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'],
              series: [
                [14, 17, 19, 20, 26, 31, 32]
              ]
            },
            options: {
              height: '100%',
              showPoint: false,
              showLine: true,
              showArea: false,
              fullWidth: true,
              showLabel: false,
              axisY: {
                showGrid: false,
                showLabel: false,
                offset: 0
              },
              axisX: {
                showGrid: false,
                showLabel: false,
                offset: 0
              },
              chartPadding: 0
            }
          }
        }
      }
    },

    ready () {
      this.$subscribe('dashboard')
      if (DEBUG) console.debug(`[i]::current state: ${store.state}`)
      // checkAuth(store.state, () => {
      //   this.activate()
      // }, () => {
      //   this.$router.go('/login')
      // })
    },

    methods: {
      activate () {
        console.log('hi')
      }
    }
  }
</script>

<style src="styles/component.css"></style>

<style scoped>
  @value globalPadding, globalRadius from '../../styles/metrics.css';
  @value bodyBackground, subBodyForeground, primaryColor, color1, color2, color3, color4, color5 from '../../styles/colors.css';

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
    box-shadow: 0 0 0 1px subBodyForeground;
    min-height: 150px;
    path.ct-line {
      stroke: primaryColor;
    }
  }

  .graph--text--only {
    .graph-wrap {
      position: relative;
    }
    .text {
      position: absolute;
      width: 100%;
      bottom: 0;
      left: 0;
      .number,
      .explanation {
        display: block;
        text-align: right;
        line-height: 25px;
        margin: 0 calc(globalPadding / 2);
      }
      .number {
        font-size: 36px;
        font-weight: 700;
      }
      .explanation {
        font-size: 12px;
      }
    }
  }

  .graph-1 {
    .ct-series-a .ct-line,
    .ct-series-a .ct-point {
      stroke: color3 !important;
    }
    span {
      color: primaryColor;
    }
  }

  .graph-2 {
    .ct-series-a .ct-line,
    .ct-series-a .ct-point {
      stroke: color4 !important;
    }
    span {
      color: primaryColor;
    }
  }

  .graph-3 {
    .ct-series-a .ct-line,
    .ct-series-a .ct-point {
      stroke: color5 !important;
    }
    span {
      color: primaryColor;
    }
  }
</style>
