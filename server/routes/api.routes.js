var express= require("express");
var router=express.Router();

var connection= require("../config/db.js");
router.use("/user",require("../controllers/user.api.js"));

module.exports= router;