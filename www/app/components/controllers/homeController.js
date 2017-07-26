export   function homeController($scope,$location,appFactory,appService) {
"ngInject";
    $scope.populateRules = populateRules;
    $scope.showIncidentForm = showIncidentForm;
    $scope.reportIncident = reportIncident;
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