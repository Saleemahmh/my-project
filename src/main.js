import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Home from './home.vue';
import Addlist from './addlist.vue';

Vue.use(VueRouter);

Vue.component('Saleemah',{
  template:'<div class="text-center"><h2>List of Persons</h2></div>'
})

const routes=[
  {
    path:'/',
    component: Home,
  },
  {
    path : '/addlist',
    component : Addlist,
  }
];
 const router= new VueRouter({
   routes,
   mode: 'history'
 });
new Vue({
  el: '#app',
  router,
  render: h => h(App)

})
