// config/express.js

var express = require('express');
//var home = require('../app/routes/home' );
var load = require('express-load');
var bodyParser = require('body-parser' );

module.exports = function() {
    var app = express();
    // configuração de ambiente 
    app.set('port' , 80);
    
    // middleware 
    app.use(express.static('./public' ));
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(require('method-override' )())
    app.set('view engine' , 'ejs' );
    app.set('views' , './app/views' );
    
    //home(app);
    load('models', {cwd: 'app'})
        .then('controllers')
        .then('routes')
        .into(app);

    return app;
};