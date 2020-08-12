// public/js/controllers/ContatosController.js
angular.module('contatooh').controller('ContatosController', function ($scope, Contato) {
    $scope.contatos = [];
    $scope.filtro = "";
    $scope.mensagem = {texto: '', style: 'alert-primary'};

    //var Contato = $resource('/contatos/:id');

    function buscaContatos() {
        Contato.query(function(response) {
            $scope.contatos = response;
            $scope.mensagem = {};
            }, 
            function(error) {
                $scope.mensagem = {
                    texto: 'Não foi possível obter a lista de contatos',
                    style: 'alert-danger'
                };
            }
        );
    }
    buscaContatos();

    $scope.remove = function(contato) {
        console.log(contato);
        Contato.delete({id: contato._id}, buscaContatos, function(error) {
            $scope.mensagem = {
                texto: 'Não foi possível remover o contatos',
                style: 'alert-danger'
            };
        }) ;
    };
});