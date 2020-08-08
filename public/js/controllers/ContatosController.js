// public/js/controllers/ContatosController.js
angular.module('contatooh').controller('ContatosController', function ($scope, $http) {
    $scope.contatos = [];
    $scope.filtro = "";    

    $http.get('/contatos').then(function(response) {
        $scope.contatos = response.data;
        }, 
        function(error) {
            console.log("Não foi possível obter a lista de contatos") ;
            console.log(error.statusText); 
            console.log(error.status);
        }
    );
    // $scope.contatos = [{
    //         "_id": 1,
    //         "nome": "Contato Angular 1",
    //         "email": "cont1@empresa.com.br"
    //     },
    //     {
    //         "_id": 2,
    //         "nome": "Contato Angular 2",
    //         "email": "cont2@empresa.com.br"
    //     }, {
    //         "_id": 3,
    //         "nome": "Contato Angular 3",
    //         "email": "cont3@empresa.com.br"
    //     }
    // ];
});