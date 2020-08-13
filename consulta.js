// contatooh/consulta.js 
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/contatooh";
var ObjectID = require('mongodb').ObjectID;

// ObjectID de algum contato existente 
var _idProcurado = new ObjectID('5f34b063ca897c78c67c7e15');

MongoClient.connect(url, {useUnifiedTopology: true, useNewUrlParser: true }, function (erro, client) {
    if (erro) throw err;
    const db = client.db("contatooh");
    db.collection('contatooh').findOne({"_id": _idProcurado}, function (erro, contato) {
        if (erro) throw err;
        console.log(contato);
    });
});