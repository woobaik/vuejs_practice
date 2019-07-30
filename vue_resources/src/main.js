import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import Header from './components/Header.vue';


Vue.component('app-header', Header)
Vue.config.productionTip = false

Vue.use(VueResource)


new Vue({
  render: h => h(App),
}).$mount('#app')
