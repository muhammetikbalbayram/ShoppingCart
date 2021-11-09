import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import { routes } from "@/routes";
import './index.css'
import './assets/@fortawesome/fontawesome-free/css/all.min.css'
import { store } from "@/store/store";

const router = new VueRouter({
  routes : routes, // routes
  mode :'history'
})

Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  router : router,
  store : store,
}).$mount('#app')
