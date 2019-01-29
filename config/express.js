// config/express.js
var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');

module.exports = function() {
    var app = express();
    // variável de ambiente
    app.set('port', 3000);

    // middleware
    app.use(express.static('./public'));  
    app.set('views','./app/views');
    app.use(express.static('./public'));
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(require('method-override')())

    //O retorno vai ser o " / "
    // var home = require('../app/routes/home');
    //home(app);
    //express-load substitui o código acima
    load('models', {cwd: 'app'})
        .then('controllers')
        .then('routes')
        .into(app);

    return app;
};
