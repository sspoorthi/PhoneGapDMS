export default function appFactory($location, $http) {
    return {
        validateLogin: () => {
            $http.get('././data/users.json').then((res) => {
                console.log(res);
            });
            $location.path('/Home');
        }
    };
}