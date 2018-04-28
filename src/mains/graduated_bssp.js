// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueLazyload from 'vue-lazyload';
import GraduatedBssp from '../GraduatedBssp';

Vue.config.productionTip = false;

Vue.use(VueLazyload);

/* eslint-disable no-new */
new Vue({
  el: '#graduated_bssp',
  template: '<GraduatedBssp/>',
  components: { GraduatedBssp },
});
