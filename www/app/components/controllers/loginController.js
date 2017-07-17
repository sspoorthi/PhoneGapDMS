
export  function loginController($scope, $location, $rootScope,appFactory,appService) {
    "ngInject";
    $scope.errors= $scope.errors || {};
    $scope.doLogin = doLogin;
    $scope.appService = appService;
    
    function doLogin () {
        let userDetails = {
            userName: $scope.username,
            password: $scope.password
        };
        $scope.appService.userNmae=$scope.username;
        $scope.appService.password=$scope.password;
        $scope.appService.userRole="nurse";
        appFactory.validateLogin(userDetails).then(res=>{
            $location.path('/Home');
        });
    };
}