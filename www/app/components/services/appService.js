
export   function appService($http){
"ngInject";
    return{
      validateLogin: (userData) => {
         return $http.get('././data/users.json').then((res) => {
              for (var index = 0; index < res.data.users.length; index++) {
                  if (angular.equals(userData.userName, res.data.users[index].id)
                  && angular.equals(userData.password, res.data.users[index].password)) {
                      return true;
                  }
              }
              return false;
          });
      },
      getRules:()=>{
          return $http.get('././data/rules.json');
      }
    };
}
