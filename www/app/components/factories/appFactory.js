export  function appFactory($http) {
    "ngInject";
    return {
        validateLogin: (userData) => {
           return $http.get('././data/users.json').then((res) => {
                angular.forEach(userData,(v,k)=>{
                });
            });
        },
        getRules:()=>{
            return $http.get('././data/rules.json');
        }
    };
}