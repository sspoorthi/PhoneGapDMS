
export  function loginController($scope, $location, $rootScope,appFactory) {
    "ngInject";
    $scope.errors= $scope.errors || {};
    $scope.doLogin = doLogin;
    
    function doLogin () {
        let userDetails = {
            userName: $scope.username,
            password: $scope.password
        };
        appFactory.validateLogin(userDetails).then(res=>{
            if (res) {
                $location.path('/Home');
            } else {
                $location.path('/Login');
            }
        });
    };
}