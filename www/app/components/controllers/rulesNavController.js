export   function rulesNavController($scope,appService, $location) {
    "ngInject";
    $scope.init=init;
    $scope.navigateRule=navigateRule;
    $scope.showPreviousRule=showPreviousRule;
    $scope.showNextRule=showNextRule;
    $scope.goToHome=goToHome;
    $scope.ruleNum=$scope.ruleNum||0;
    $scope.protocolActions = {};
    $scope.user = appService.userName;
    $scope.role = appService.userRole;
    function init(){
      console.log(appService.getRuleObject());
      $scope.protocolActions = appService.getRuleObject().actions;
      $scope.ruleNum = 0;
      //$scope.ruleText = "Check with local authorities to verify the disaster and obtain additional information.";
      navigateRule($scope.ruleNum);
    }
    function navigateRule(ruleNum){
        if($scope.protocolActions){
            $scope.ruleText = $scope.protocolActions[ruleNum].message;
        }
    }
    function showNextRule(){
        if(!angular.equals(Object.keys($scope.protocolActions).length-1, $scope.ruleNum)){
            $scope.ruleNum=$scope.ruleNum+1;
            navigateRule($scope.ruleNum);
        } else if(angular.equals($scope.protocolActions[$scope.ruleNum].stepId,"ACTIVATE_CODE")){
          // trigger disaster_phase activation...
          // send broadcast msg to all
          appService.state = "disaster_phase";
        }
    }
    function showPreviousRule(){
        if(!angular.equals($scope.ruleNum,0)){
            $scope.ruleNum=$scope.ruleNum-1;
        }
        navigateRule($scope.ruleNum);
    }
    function goToHome() {
      $location.path('/Home');
    }
    init();
}
