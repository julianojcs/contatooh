// config/database.js

var mongoose = require('mongoose');
mongoose.set('debug' , true);
//mongoose.set('useCreateIndex', true)

module.exports = function(uri) {
    const options = {
        poolSize: 15, 
        useUnifiedTopology: true, 
        useNewUrlParser: true,
        useCreateIndex: true
        //,useFindAndModify: false
    };
    
    //poolSize: Quantidade de conexões
    mongoose.connect(uri, options);

    mongoose.connection.on('connected' , function() {
        console.log('Mongoose! Conectado em ' + uri);
    });
    mongoose.connection.on('disconnected' , function() {
        console.log('Mongoose! Desconectado de ' + uri) ;
    });
    mongoose.connection.on('error' , function(erro) {
        console.log('Mongoose! Erro na conexão: ' + erro);
    });

    process.on('SIGINT', function() {
        mongoose.connection.close(function() {
            console.log('Mongoose! Desconectado pelo término da aplicação') ;
            // 0 indica que a finalização ocorreu sem erros 
            process.exit(0);
        });
    });
};