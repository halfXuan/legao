import Vue from 'vue'
import App from './App'
import request from './utils/request.js'
import api from './api/index.js'
import url from './utils/config.js'
import uView from "uview-ui";
Vue.use(uView);
import basics from './pages/home/home.vue'
Vue.component('basics',basics)

import components from './pages/component/home.vue'
Vue.component('components',components)

import plugin from './pages/plugin/home.vue'
Vue.component('plugin',plugin)

import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)

import mine from './pages/mine/mine.vue'
Vue.component('mine',mine)
Vue.prototype.$request = request
Vue.prototype.$api = api
Vue.prototype.$url = url
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

 



