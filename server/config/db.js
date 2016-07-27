var mongoose = require('mongoose');

var connection=mongoose.connect('mongodb://localhost/mean_7am');

module.exports= connection;