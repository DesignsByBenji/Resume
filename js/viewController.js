var app = angular.module('mainApp', ['ngRoute']);

app.controller('RootCtrl', ['$scope', function($scope){
    $scope.title = "Home Page";
}]);

app.controller('CatsCtrl', ['$scope', function($scope){
    $scope.title = "Cats Page";
}]);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/', {
            controller : 'RootCtrl',
            templateUrl : 'about.html'
        })
        .when('/machinesofwar', {
            controller : 'RootCtrl',
            templateUrl : 'machinesofwar.html'
        })
        .when('/proving-grounds', {
            controller : 'RootCtrl',
            templateUrl : 'about2.php'
        })
         .when('/changes', {
            controller : 'RootCtrl',
            templateUrl : 'change.html'
        })
        .when('/bug', {
            controller : 'RootCtrl',
            templateUrl : 'bug.html'
        })
        .when('/contact', {
            controller : 'RootCtrl',
            templateUrl : 'contact.html'
        })
        .when('/payments', {
			controller : 'RootCtrl',
			templateUrl : 'payments.html'
		})
        
        .otherwise({
            redirectTo : '/'
        });
}]);
