import Vue from 'vue'
import App from './App.vue'
import 'bootstrap';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Students from './components/students.vue'
import VModal from 'vue-js-modal/dist/index.nocss.js'
import 'vue-js-modal/dist/styles.css'
import Paynow from './components/Paynow.vue'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.use(VueRouter);
const routes=[
  {path:'/', component:HelloWorld},
  {path:'/students', component:Students},
  {path:'/paynow', component:Paynow}


]
const router=new VueRouter({routes})
Vue.config.productionTip = false

new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')

Vue.use(VModal)

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
