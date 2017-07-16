export   function rulesNavController($scope,appFactory) {
    "ngInject";

    function navigateRule(role,ruleNum){
        appFactory.getRules().then(res=>{
            console.log(res);
        });
    }
}