// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Bssp from '../Bssp';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#bssp',
  template: '<Bssp/>',
  components: { Bssp },
});
