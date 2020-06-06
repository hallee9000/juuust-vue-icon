import Vue from "vue"
import App from "./App.vue"
import * as icons from './index.js'
import Message from 'vue-m-message'
import 'vue-m-message/dist/index.css'

const iconNames = []

if (typeof Vue !== 'undefined') {
  for (const name in icons) {
    Vue.component(name, icons[name])
    iconNames.push(name)
  }
}

Vue.use(Message)
Vue.prototype.ICON_NAMES = iconNames

new Vue({
  render: h => h(App)
}).$mount("#app");
