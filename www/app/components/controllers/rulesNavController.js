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
    $scope.disableNext = false;
    function init(){
      console.log(appService.getRuleObject());
      $scope.protocolActions = appService.getRuleObject().actions;
      $scope.ruleNum = 0;
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
          var title = "ALERT";
          var message = "Confirm activation of CODE YELLOW. This will now activate disaster phase.";
          var buttonName = "Confirm";
          navigator.notification.confirm(message, confirmDisasterPhase, title, buttonName);

          function confirmDisasterPhase() {
              console.log("disaster_phase!");
              appService.state = "disaster_phase";
              appService.getRules(appService.userRole, appService.state).then(res=>{
                  /*let rulesObj={};
                  $scope.rulesActions = res.actions;
                  let tempRulesObj= res.actions;
                  $location.path('/Rules');*/
                  $scope.protocolActions = res.actions;
                  $scope.ruleNum = 0;
                  navigateRule($scope.ruleNum);
              });
              //populateRules();
              //$location.path('/Rules');
          }
        } else if (angular.equals($scope.protocolActions[$scope.ruleNum].stepId,"LAST_STEP")) {
            $scope.ruleText = "You are done with all the actions. Please wait for further commands...";
            $scope.disableNext = true;
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
