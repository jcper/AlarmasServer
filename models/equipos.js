'use strict';
module.exports = function(sequelize, DataTypes) {
  var Equipos = sequelize.define('Equipos', {
    name: DataTypes.STRING,
    alarms: DataTypes.INTEGER,
    DateAlarms: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Equipos;
};