
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/** importing vue-router */  
import VueRouter from 'vue-router' ;
Vue.use(VueRouter); 

/** Components Urls  */

/** 
 * .default is required to avoid this error 
 * @see https://github.com/vuejs/vue-router/issues/1882
 */

// Our components 
const Dashboard = require('./components/Dashboard.vue').default ; 
const Profile 	= require('./components/Profile.vue').default ; 

// Our routes 
let routes = [
	{path : '/dashboard' , component:  Dashboard }, 
	{path : '/profile' 	 , component:  Profile }, 
];


// we need to register our routes  
const router = new VueRouter({
	// this prop to clear url instead of home#/profile etc it will be just profile
	mode:'history',
	routes
});
 
 
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    // then we call our router 
    router
});
