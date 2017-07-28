require('../css/index.css');
require('../../node_modules/bootstrap/dist/css/bootstrap.min.css');
import angular from 'angular';
import angularRoute from 'angular-route';
import {config} from './config';
import {appFactory} from './components/factories/appFactory';
import {appService} from './components/services/appService';
// controllers
import {homeController} from './components/controllers/homeController';
import {loginController} from './components/controllers/loginController';
import {rulesNavController} from './components/controllers/rulesNavController';

// directives
import {appHeader} from './components/directives/header.directive';
import {rulesNavigator} from './components/directives/rules-navigator.directive';


angular.module('dmsApp', ['ngRoute'])
	.config(config)
    .controller("homeController",homeController)
    .controller("loginController",loginController)
		.controller("rulesNavController",rulesNavController)
    .factory("appFactory",appFactory)
    .service("appService",appService)
    .directive("appHeader",appHeader)
    .directive("rulesNavigator",rulesNavigator)
    .name;
