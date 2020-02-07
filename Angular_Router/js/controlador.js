/* ---------------------------------------------------------------------------------------------- */
/* DIRECTIVAS PERSONALIZADAS */
/* ---------------------------------------------------------------------------------------------- */

angular.module ('miApp', ['ngRoute'])
.config(function($routeProvider,$locationProvider){
    $routeProvider
    .when('/', {templateUrl: 'home.html'})
    .when('/contacto', {templateUrl: 'contacto.html'})
    .when('/about', {templateUrl: 'about.html'})
    .when('/configuracion', {templateUrl: 'configuracion.html'})
    .otherwise({templateUrl: 'home.html'})

    $locationProvider.html5Mode(true)
})
    
    .controller('miCtrl', function($scope,){
             
    })
   
