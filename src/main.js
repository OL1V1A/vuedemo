// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from './components/layout'
import VueRouter from 'vue-router'
import IndexPage from './pages/index'
import VueResource from 'vue-resource'
import axios from 'axios'
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.prototype.axios = axios
Vue.config.productionTip = false
let router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: IndexPage
    }
  ]
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { Layout },
  template: '<Layout/>'
})
