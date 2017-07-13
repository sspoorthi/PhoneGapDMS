export  function appFactory($http) {
    "ngInject";
    return {
        validateLogin: (userData) => {
           return $http.get('././data/users.json').then((res) => {
                angular.forEach(userData,(v,k)=>{
                    console.log(v);
                    console.log(k);
                });
            });
        }
    };
}