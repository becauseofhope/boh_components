// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueLazyload from 'vue-lazyload';
import InLovingMemory from '../InLovingMemory';

Vue.config.productionTip = false;

Vue.use(VueLazyload);

/* eslint-disable no-new */
new Vue({
  el: '#in_loving_memory',
  template: '<InLovingMemory/>',
  components: { InLovingMemory },
});
