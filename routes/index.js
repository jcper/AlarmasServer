var models  = require('../models');
var express = require('express');
var router  = express.Router();
var SocketServer = require('ws').Server;
var alarma='';

var wss = new SocketServer({port: 8080});

router.get('/', function(req, res) {
  models.Equipos.findAll().then(function(equipos) {
    res.render('index', {
      title: 'Sistema integrado de alarmas SIA24',
      equipos:equipos
    });
  });
});

wss.on('connection', function(ws) {
    ws.on('message', function(message) {
        console.log('received: %s', message);
       alarma="Alarma funcionando";

    });
    //ws.send('Alarma funcionando sin avisos');
});




setInterval(() => {
  wss.clients.forEach((client) => {
    client.send(new Date().toTimeString()+ alarma);
   });
}, 1000);

module.exports = router;
