// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'ant-design-vue/dist/antd.css';
import Antd from 'ant-design-vue/es';
import Vue from 'vue';
import App from './App';

Vue.use(Antd);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
});
