// public/js/controllers/ContatoController.js 

angular.module('contatooh').controller('ContatoController' , function($scope, $routeParams, Contato) {
    console.log($routeParams.contatoId);

    // Apaga a linha que constroi o resource, pois o serviço ContatoService.js passará a retornar 
    // uma instância de $resource já configurada e pronta para uso
    //var Contato = $resource('/contatos/:id');

    if($routeParams.contatoId) {
        Contato.get({id: $routeParams.contatoId}, 
            function(contato) {
                $scope.contato = contato;
            },
            function (error) {
                $scope.mensagem = {
                    texto: "Não foi possível obter o contato.",
                    style: 'alert-danger'
                };
                console.log(error);
            }
        );
    } else {
        $scope.contato = new Contato();
    };

    $scope.salva = () => {
        $scope.contato.$save().then(function () {
            $scope.mensagem = {
                texto: 'Salvo com sucesso!',
                style: 'alert-primary'
            };
            // limpa o formulário 
            $scope.contato = new Contato();
            console.log($scope.mensagem);
        }).catch(function (error) {
            $scope.mensagem = {
                texto: 'Não foi possível salvar o contato!',
                style: 'alert-danger'
            };
            console.log($scope.mensagem);
        });
        console.log($scope.contato);
    };
    
});