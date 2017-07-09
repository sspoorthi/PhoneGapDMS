angular.module("dmsApp", ['ngRoute'])
    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/Login', {
                templateUrl: 'app/views/app-login.html',
                controller: 'loginController'
            })
            .when('/Home', {
                templateUrl: 'app/views/app-main-page.html',
                controller: 'mainController'
            })
            .otherwise({
                redirectTo: '/Login'
            });
    }])
    .controller('indexController',['$scope','$location','$rootScope',function($scope,$location,$rootScope){
        $location.path('/Login');
    }])
    .controller('mainController',[])
    .controller('loginController',['$scope','$location','$rootScope',function($scope,$location,$rootScope){
        $scope.doLogin=function(){
            alert("login");
        };
    }]);