export   function rulesNavController($scope,appService) {
    "ngInject";
    $scope.init=init;
    $scope.navigateRule=navigateRule;
    $scope.showPreviousRule=showPreviousRule;
    $scope.showNextRule=showNextRule;
    $scope.ruleNum=$scope.ruleNum||0;
    function init(){
        navigateRule($scope.ruleNum);
    }
    function navigateRule(ruleNum){
        if(appService.rulesObj){
            $scope.ruleText = appService.rulesObj[ruleNum].text;
        }
    }
    function showNextRule(){
        if(!angular.equals(Object.keys(appService.rulesObj).length-1, $scope.ruleNum)){
            $scope.ruleNum=$scope.ruleNum+1;
        }
        navigateRule($scope.ruleNum);
    }
    function showPreviousRule(){
        if(!angular.equals($scope.ruleNum,0)){
            $scope.ruleNum=$scope.ruleNum-1;
        }
        navigateRule($scope.ruleNum);
    }
    init();
}