import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'



import { MdButton, MdDrawer } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.config.productionTip = false

Vue.use(VueResource)
Vue.use(MdButton)
Vue.use(MdDrawer)

new Vue({
  render: h => h(App),
}).$mount('#app')
