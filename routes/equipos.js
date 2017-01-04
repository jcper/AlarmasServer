var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.post('/alta', function(req, res) {
 var d = new Date();
  models.Equipos.create({
    name: req.body.username,
    alarms:0,
    DateAlarms:d
  }).then(function() {
    res.redirect('/');
  });
});

router.get('/:equipo_id/destroy', function(req, res) {
  models.Equipos.destroy({
    where: {
      id: req.params.equipo_id
    }
  }).then(function() {
    res.redirect('/');
  });
});




module.exports = router;
