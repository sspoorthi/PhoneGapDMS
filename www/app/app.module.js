require('../css/index.css');
require('../../node_modules/bootstrap/dist/css/bootstrap.min.css');
import angular from 'angular';
import angularRoute from 'angular-route';
import {config} from './config';
import {appFactory} from './components/factories/appFactory';
import {appService} from './components/services/dummyService';
// controllers
import {homeController} from './components/controllers/homeController';
import {loginController} from './components/controllers/loginController';

// directives
import {appHeader} from './components/directives/header.directive';


angular.module('dmsApp', ['ngRoute'])
	.config(config)
    .controller("homeController",homeController)
    .controller("loginController",loginController)
    .factory("appFactory",appFactory)
    .service("appService",appService)
    .directive("appHeader",appHeader)
    .name;