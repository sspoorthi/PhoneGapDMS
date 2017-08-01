export   function homeController($scope,$location,appService) {
"ngInject";
    $scope.populateRules = populateRules;
    $scope.showIncidentForm = showIncidentForm;
    $scope.showSwitchRoleForm = showSwitchRoleForm;
    $scope.reportIncident = reportIncident;
    $scope.switchRole = switchRole;
    $scope.goToHome = goToHome;
    $scope.getContacts = getContacts;
    $scope.appService=appService;
    $scope.user = $scope.appService.userName;
    $scope.role = $scope.appService.userRole;
    $scope.contacts = $scope.appService.contacts;
    function populateRules(){
        appService.getRules($scope.appService.userRole, $scope.appService.state).then(res=>{
            let rulesObj={};
            $scope.rulesActions = res.actions;
            let tempRulesObj= res.actions;
            $location.path('/Rules');
        });
    }

    function showIncidentForm() {
         $location.path('/IncidentForm');
    }

    function reportIncident() {
        $scope.appService.incident = $scope.incident;
        $scope.appService.incidentDescription = $scope.incidentDescription;
        $scope.appService.incidentLocation = $scope.incidentLocation;
        $scope.appService.state = "incident_reported";
        if($scope.appService.userRole == "incident_commander") {
            var title = "ALERT";
            var message = "Incident: " + $scope.appService.incident + "\n Incident Description: " + $scope.appService.incidentDescription
                + "\n Incident location:" + $scope.appService.incidentLocation;
            var buttonName = "Acknowledge";
            navigator.notification.alert(message, ack, title, buttonName);
            var times = 3;
            navigator.notification.beep(times);

            function ack() {
                //console.log("Acknowledged!");
                populateRules();
            }
        }

    }

    function showSwitchRoleForm() {
      $location.path('/SwitchRole');
    }

    function goToHome() {
      $location.path('/Home');
    }

    function switchRole() {
      console.log($scope.newRole);
      $scope.appService.userRole = $scope.newRole;
      var title = "ALERT";
      var message = "Your role has been changed to: " + $scope.appService.userRole;
      var buttonName = "OK";
      navigator.notification.alert(message, navigate, title, buttonName);
      function navigate() {
          console.log($scope.appService.userRole);
          goToHome();
      }
    }

    function getContacts() {
        appService.getContacts().then(res => {
            $scope.appService.contacts = res;
            $location.path('/Contacts');
        });
    }

    $scope.makeCall = function(number) {
        window.plugins.CallNumber.callNumber(onSuccess, onError, number, true);

        function onSuccess(result){
            $location.path('/Contacts');
            console.log("Success:"+result);
        }

        function onError(result) {
            $location.path('/Contacts');
            console.log("Error:"+result);
        }
    }
}
