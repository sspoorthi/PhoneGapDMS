export   function homeController($scope,$location,appService) {
"ngInject";
    $scope.populateRules = populateRules;
    $scope.showIncidentForm = showIncidentForm;

    $scope.reportIncident = reportIncident;
    $scope.appService=appService;
    function populateRules(){
//      $scope.appService.state = "incident_reported";
      $scope.appService.state = "disaster_phase";
        appService.getRules($scope.appService.userRole, $scope.appService.state).then(res=>{
            let rulesObj={};
            $scope.rulesActions = res.actions;
            let tempRulesObj= res.actions;
            $location.path('/Rules');
  //          rulesNavController.init();
            /*for(let i=0;i<tempRulesObj.length;i++){
                if(angular.equals(appService.userRole,tempRulesObj[i].role)){
                    rulesObj= angular.extend(rulesObj,tempRulesObj[i].rules);
                    $scope.appService.rulesObj=rulesObj;
                    break;
                }
            } */
        });
    }

    function showIncidentForm() {
         $location.path('/IncidentForm');
    }

    function reportIncident() {
        $scope.appService.incident = $scope.incident;
        $scope.appService.incidentDescription = $scope.incidentDescription;
        $scope.appService.incidentLocation = $scope.incidentLocation;
        if($scope.appService.userRole == "admin") {
            var title = "ALERT";
            var message = "Incident: " + $scope.appService.incident + "\n Incident Description: " + $scope.appService.incidentDescription
                + "\n Incident location:" + $scope.appService.incidentLocation;
            var buttonName = "Acknowledge";
            navigator.notification.alert(message, ack, title, buttonName);
            var times = 3;
            navigator.notification.beep(times);

            function ack() {
                console.log("Acknowledged!");
                $location.path('/Rules');
            }
        }

    }
}
