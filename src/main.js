import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.use(Vuex)
Vue.config.productionTip = false
import moduleCart from "./store/cart"
import moduleProduct from "./store/product"

const store = new Vuex.Store({
  state: {
    count: 1111122222
  },
  modules: {
    moduleCart,
    moduleProduct
  }
});
new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
