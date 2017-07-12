import loginController from "./components/controllers/loginController";
import homeController from "./components/controllers/homeController";

export default function config($routeProvider, $locationProvider) {
    $routeProvider
        .when('/Login', {
            templateUrl: 'app/components/views/app-login.html',
            controller: loginController
        })
        .when('/Home', {
            templateUrl: 'app/components/views/app-main-page.html',
            controller: homeController
        })
        .otherwise({
            redirectTo: '/Login'
        });

    $locationProvider.html5Mode(false);
}