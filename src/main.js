import Vue from 'vue'
import App from './App.vue'
import Button from 'material-components-vue/dist/button'

Vue.config.productionTip = false

Vue.use(Button)

new Vue({
  render: h => h(App),
}).$mount('#app')
