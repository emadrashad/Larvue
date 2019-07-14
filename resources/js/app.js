
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');




window.Vue = require('vue');
// importing moment js 
import moment from 'moment'; 

// ES6 Modules or TypeScript
import Swal from 'sweetalert2';

window.Swal = Swal ; 

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});

window.Toast = Toast ; 

/** importing vue-router */  
import VueRouter from 'vue-router' ;
Vue.use(VueRouter); 

import VueProgressBar from 'vue-progressbar';

const options = {
  color: 'red',
  failedColor: '#874b4b',
  thickness: '3px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  location: 'top',
  inverse: false
}


Vue.use(VueProgressBar , options) ; 

import { Form, HasError, AlertError } from 'vform';
window.Form = Form ; 

// Global components 
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)



/**
 * Making our custom event
 */

 let Fire = new Vue(); 
 
 window.Fire = Fire ; 



/** Components Urls  */

/** 
 * .default is required to avoid this error 
 * @see https://github.com/vuejs/vue-router/issues/1882
 */

// Our components 
const Dashboard = require('./components/Dashboard.vue').default ; 
const Profile 	= require('./components/Profile.vue').default ; 
const Users 	= require('./components/Users.vue').default ; 

// Our routes 
let routes = [
	{path : '/dashboard' , component:  Dashboard }, 
	{path : '/profile' 	 , component:  Profile }, 
	{path : '/users' 	 , component:  Users }, 
];


// we need to register our routes  
const router = new VueRouter({
	// this prop to clear url instead of home#/profile etc it will be just profile
	mode:'history',
	routes
});

Vue.filter('upText' , function(text){
	return text.charAt(0).toUpperCase() + text.slice(1) ; 
});

Vue.filter('huDate' , function(date){
	return moment(date).format("MMM Do YY");  
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
