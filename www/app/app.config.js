/* 
App configuration
 */
export function config($routeProvider, $locationProvider) {
    "ngInject";
    $routeProvider
        .when('/Home', {
            templateUrl: 'app/views/sections.html',
            controller: 'sectionsCtrl'
        })
        .otherwise({
            redirectTo: '/Home'
        });
}