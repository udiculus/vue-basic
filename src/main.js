// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import BootstrapVue from 'bootstrap-vue'
import App from './components/App'
import router from './router'
import {index} from './store/index'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import {Modal} from 'bootstrap-vue/es/components'

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(VueResource)
Vue.use(BootstrapVue)
Vue.use(Modal)
Vue.http.options.root = 'http://localhost:8080/springbasic/api'

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store: index,
    components: {App},
    template: '<App/>'
})
