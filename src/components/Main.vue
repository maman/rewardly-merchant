<template>
  <div class="application flex flex-column">
    <div class="flex-auto sm-flex">
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
  /**
   * Import external libraries
   */
  @import '../styles/fonts.css';
  @import 'chartist/dist/chartist.min.css';
  @import '../styles/chartist.css';
  @import 'basscss-base-reset';
  @import 'basscss-base-forms';
  @import 'basscss-base-tables';
  @import 'basscss-base-typography';
  @import 'basscss-color-base';
  @import 'basscss-color-forms';
  @import 'basscss-color-tables';
  @import 'basscss-btn';
  @import 'basscss-btn-primary';
  @import 'basscss-btn-outline';
  @import 'basscss-type-scale';
  @import 'basscss-utility-typography';
  @import 'basscss-utility-layout';
  @import 'basscss-align';
  @import 'basscss-white-space';
  @import 'basscss-positions';
  @import 'basscss-responsive-states';
  @import 'basscss-grid';
  @import 'flex-object';
  @import 'basscss-borders';
  @import 'basscss-colors';
  @import 'basscss-background-colors';
  @import 'basscss-defaults';
  @import 'ibm-icon-font/css/ibmicons.css';
  @lost flexbox flex;

  :root {
    --font-family: Roboto, 'Helvetica Neue', Helvetica, sans-serif;
    --header-font-family: 'Open Sans', 'Helvetica Neue', Helvetica, sans-serif;
    --line-height: 1.5;
    --heading-font-family: var(--header-font-family);
    --heading-font-weight: 700;
    --heading-line-height: 1.25;
    --monospace-font-family: 'Source Code Pro', Consolas, monospace;
    --h1: 2rem;
    --h2: 1.5rem;
    --h3: 1.25rem;
    --h4: 1rem;
    --h5: .875rem;
    --h6: .75rem;
    --bold-font-weight: 700;
    --space-1: .5rem;
    --space-2: 1rem;
    --space-3: 2rem;
    --space-4: 4rem;
    --form-field-font-size: 1rem;
    --form-field-height: 2.25rem;
    --form-field-padding-y: .5rem;
    --form-field-padding-x: .5rem;
    --button-font-size: inherit;
    --button-font-weight: 700;
    --button-line-height: 1.125rem;
    --button-padding-y: .5rem;
    --button-padding-x: 1rem;
    --container-width: 64em;
    --darken-1: rgba(0,0,0,.0625);
    --darken-2: rgba(0,0,0,.125);
    --darken-3: rgba(0,0,0,.25);
    --darken-4: rgba(0,0,0,.5);
    --border-width: 1px;
    --border-radius: 3px;
    --border-color: var(--darken-2);
    --hover-background-color: var(--darken-1);
    --link-color: var(--blue);
    --button-background-color: var(--blue);
    --pre-background-color: var(--silver);
  }
</style>

<style scoped>
  @value bodyBackground from '../styles/colors.css';

  .application {
    min-height: 100vh;
    background-color: bodyBackground;
  }
</style>
