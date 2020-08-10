// app/controllers/contato.js 

var contatos = [ 
    {_id: 1, nome: 'Contato Exemplo 1' , email: 'cont1@empresa.com.br' }, 
    {_id: 2, nome: 'Contato Exemplo 2' , email: 'cont2@empresa.com.br' }, 
    {_id: 3, nome: 'Contato Exemplo 3' , email: 'cont3@empresa.com.br' }
];

var ID_CONTATO_INC = contatos.length;

module.exports = function() {
    var controller = {};

    controller.listaTodos = function(req, res) { 
        // envia a lista
        res.json(contatos);
    };

    controller.salvaContato = function(req, res) {
        var contato = req.body; // req.body -> Variáveis do formulário usando o método POST. (equivale ao $_POST do PHP)
                                // req.query -> Variáveis da URL usando método GET(equivale ao $_GET do PHP)
                                // req.params -> Variáveis das rotas da URL (ex: localhost/contatooh/contato/1) -> param = 1 
        contato = contato._id ? atualiza(contato) : adiciona(contato);
        res.json(contato); 
    };
    
    function adiciona(contatoNovo) {
        contatoNovo._id = ++ID_CONTATO_INC;
        contatos.push(contatoNovo);
        return contatoNovo;
    }
    function atualiza(contatoAlterar) {
        contatos = contatos.map(function(contato) {
            if(contato. _id == contatoAlterar._id) {
                contato = contatoAlterar;
            }
            return contato;
        }); 
        return contatoAlterar;
    }

    controller.obtemContato = function(req, res) {
        console.log(req.params.id); 
        var idContato = req.params.id; 
        var contato = contatos.filter(function(contato) { 
            return contato._id == idContato;
        })[0];
        return contato ? res.json(contato) : res.status(404).send('Contato não encontrado');
    };

    controller.removeContato = function(req, res) {
        var idContato = req.params.id; 
        console.log('API: removeContato: ' + idContato);
        contatos = contatos.filter(function(contato) { 
            return contato._id != idContato;
        });
        res.sendStatus(204).end();
    };

    return controller;
};