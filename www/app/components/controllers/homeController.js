export   function homeController($scope,appFactory) {
"ngInject";
    $scope.populateRules = populateRules;
    function populateRules(){
        appFactory.getRules().then(res=>{
            console.log(res);
        });
    }
}