angular.module("dmsApp", ['ngRoute'])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/Login', {
                templateUrl: 'app/views/app-login.html',
                controller: 'loginController'
            })
            .when('/Home', {
                templateUrl: 'app/views/app-main-page.html',
                controller: 'homeController'
            })
            .otherwise({
                redirectTo: '/Login'
            });
    })
    .controller('indexController', function ($scope, $location, $rootScope) {
        $location.path('/Login');
    })
    .controller('homeController', [])
    .controller('loginController', ['appFactory', function ($scope, $location, $rootScope, appFactory) {
        $scope.doLogin = function () {
            appFactory.validateLogin();
        };
    }])
    .factory('appFactory', ['$http', ($http) => {
        return {
            validateLogin: () => {
                alert(1)
            }
        }
    }]);