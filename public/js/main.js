// public/js/main.js 

angular.module('contatooh', ['ngRoute', 'ngResource']).config(function($routeProvider, $locationProvider){
    $routeProvider.when('/contatos', {
        templateUrl: 'partials/contatos.html', 
        controller: 'ContatosController'
    }).when('/contato', {
        templateUrl: 'partials/contato.html', 
        controller: 'ContatoController'
    }).when('/contato/:contatoId', {
        templateUrl: 'partials/contato.html', 
        controller: 'ContatoController'
    }).otherwise({
        redirectTo: '/contatos'
    });

    $locationProvider.html5Mode(false);
    $locationProvider.hashPrefix('');
});