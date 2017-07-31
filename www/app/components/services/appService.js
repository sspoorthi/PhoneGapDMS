
export   function appService($http){
"ngInject";
  var ruleObject = {};
  var state = "default";
    return{
        validateLogin: (userData) => {
         return $http.get('././data/users.json').then((res) => {
              for (var index = 0; index < res.data.users.length; index++) {
                  if (angular.equals(userData.userName, res.data.users[index].id)
                  && angular.equals(userData.password, res.data.users[index].password)) {
                      return res.data.users[index];
                  }
              }
              return false;
          });
      },
      getRules:(userRole, state)=>{
          return $http.get('././data/protocols.json').then((res) => {
            console.log(res.data);
            for(var index = 0; index < res.data.protocols.length; index++) {
              if (angular.equals(userRole, res.data.protocols[index].role)
              && angular.equals(state, res.data.protocols[index].state)) {
                ruleObject = res.data.protocols[index];
                return res.data.protocols[index];
              }
            }
            return false;
          });
      },
      setRuleObject:(ruleObject)=>{
        ruleObject = ruleObject;
      },
      getRuleObject:()=>{
        return ruleObject;
      }
    };
}
