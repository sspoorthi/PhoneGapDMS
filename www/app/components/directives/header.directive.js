export function appHeader() {
    let directive = {
        restrict: 'E',
        transclude: true,
        templateUrl: 'app/components/views/app-header.html',
        scope: {

        },
    };
    return directive;
}