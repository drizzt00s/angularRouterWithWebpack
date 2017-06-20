import angular from 'angular';
import uirouter from 'angular-ui-router';

var main = angular.module('app', [uirouter]);

var homeCtl = require('../views/home/home.js')(main);
var aboutCtl = require('../views/about/about.js')(main);
var productsCtl = require('../views/products/products.js')(main);

 //import homeCtl from '../views/home/home.js';
// import aboutCtl from '../views/about/about.js';
// import productsCtl from '../views/products/products.js';

main.config(function($stateProvider, $urlRouterProvider){
	$stateProvider.state('home',{
		url:'/home',
		templateUrl:'views/home/home.html',
		controller:homeCtl
	})
	.state('about',{
		url:'/about',
		templateUrl:'views/about/about.html',
		controller:aboutCtl
	})
	.state('products',{
		url:'/products',
		templateUrl:'views/products/products.html',
		controller:productsCtl
	});

	$urlRouterProvider.otherwise('/');
});



