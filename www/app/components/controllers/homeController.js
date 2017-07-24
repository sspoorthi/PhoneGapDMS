export   function homeController($scope,$location,appService) {
"ngInject";
    $scope.populateRules = populateRules;
    $scope.appService=appService;
    function populateRules(){
      $scope.appService.state = "incident_reported";
        appService.getRules($scope.appService.userRole, $scope.appService.state).then(res=>{
            $scope.appService.rulesObj = res.actions;
            let rulesObj={};
            let tempRulesObj= res.actions;
            $location.path('/Rules');
          /*  for(let i=0;i<tempRulesObj.length;i++){
                if(angular.equals(appService.userRole,tempRulesObj[i].role)){
                    rulesObj= angular.extend(rulesObj,tempRulesObj[i].rules);
                    $scope.appService.rulesObj=rulesObj;
                    break;
                }
            } */
        });
    }
}
