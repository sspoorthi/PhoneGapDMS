
export  function loginController($scope, $location, $rootScope,appService) {
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
        appService.validateLogin(userDetails).then(res=>{
            if (res) {
                console.log(res);
                $location.path('/Home');
            } else {
                $location.path('/Login');
            }
        });
    };
}
