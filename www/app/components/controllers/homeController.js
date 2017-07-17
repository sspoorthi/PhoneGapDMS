export   function homeController($scope,$location,appFactory,appService) {
"ngInject";
    $scope.populateRules = populateRules;
    $scope.appService=appService;
    function populateRules(){
        appFactory.getRules().then(res=>{
            let rulesObj={};
            let tempRulesObj= res.data.rules;
            $location.path('/Rules');
            for(let i=0;i<tempRulesObj.length;i++){
                if(angular.equals(appService.userRole,tempRulesObj[i].role)){
                    rulesObj= angular.extend(rulesObj,tempRulesObj[i].rules);
                    $scope.appService.rulesObj=rulesObj;
                    break;
                }
            }
        });
    }
}