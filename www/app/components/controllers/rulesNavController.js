export   function rulesNavController($scope,appService) {
    "ngInject";
    $scope.init=init;
    $scope.navigateRule=navigateRule;
    $scope.showPreviousRule=showPreviousRule;
    $scope.showNextRule=showNextRule;
    $scope.ruleNum=$scope.ruleNum||0;
    $scope.protocolActions = {};
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
        }
    }
    function showPreviousRule(){
        if(!angular.equals($scope.ruleNum,0)){
            $scope.ruleNum=$scope.ruleNum-1;
        }
        navigateRule($scope.ruleNum);
    }
    init();
}
