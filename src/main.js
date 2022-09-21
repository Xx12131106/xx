import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-chalk/index.css';
import '../public/font/index.css'

Vue.config.productionTip = false

Vue.use(ElementUI,{locale});

// 引入echarts
import * as echarts from "echarts"
Vue.prototype.$echarts = echarts
// 引入axios
import axios from 'axios'
Vue.prototype.axios = axios

new Vue({
	router,
  render: h => h(App),
}).$mount('#app')