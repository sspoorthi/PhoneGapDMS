import {loginController} from "./components/controllers/loginController";
import {homeController} from "./components/controllers/homeController";
import {rulesNavController} from "./components/controllers/rulesNavController";

export function config($routeProvider, $locationProvider) {
    $routeProvider
        .when('/Login', {
            templateUrl: 'app/components/views/app-login.html',
            controller: loginController
        })
        .when('/Home', {
            templateUrl: 'app/components/views/app-main-page.html',
            controller: homeController
        })
        .when('/Rules',{
            templateUrl:'app/components/views/rules-navigator.html',
            controller:rulesNavController
        })
        .when('/IncidentForm', {
            templateUrl: 'app/components/views/incident-form.html'
            // controller: incidentController
        })
        .otherwise({
            redirectTo: '/Login'
        });

    $locationProvider.html5Mode(false);
}