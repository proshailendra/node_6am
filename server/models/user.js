var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    _id: {type: mongoose.Schema.ObjectId, auto: true},
    name: {type: String, required: true},
    address: String,
    contactNo: String
});

var user= mongoose.model("users",userSchema);

module.exports= user;