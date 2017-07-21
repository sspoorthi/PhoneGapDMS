
export  function loginController($scope, $location, $rootScope,appService) {
    "ngInject";
    $scope.errors= $scope.errors || {};
    $scope.doLogin = doLogin;
    $scope.appService = appService;
    $scope.appService.loggedIn = false;
    function doLogin () {
        let userDetails = {
            userName: $scope.username,
            password: $scope.password
        };
        $scope.appService.userName=$scope.username;
        $scope.appService.password=$scope.password;
        $scope.appService.userRole="nurse";
        appService.validateLogin(userDetails).then(res=>{
            if (res) {
                $scope.appService.loggedIn = true;
                console.log(res);
                $location.path('/Home');
            } else {
                $location.path('/Login');
            }
        });
    };
}
