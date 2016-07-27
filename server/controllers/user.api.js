var express = require("express");
var router = express.Router();

var user = require("../models/user.js");

router.get("/", function (req, res) {
    user.find({}, function (err, data) {
        if (err)
            res.send("error");
        else
            res.send(data);
    });
});

router.get("/:id", function (req, res) {
    var id = req.params.id;
    user.find({_id: id}, function (err, data) {
        if (err)
            res.send("error");
        else
            res.send(data[0]);
    });
});

router.post("/", function (req, res) {
    var obj = new user(req.body);
    obj.save(function (err, data) {
        if (err)
            res.send("error");
        else
            res.send("created");
    });
});

router.put("/:id", function (req, res) {
    var id = req.params.id;
    var obj = req.body;
    user.findOneAndUpdate({_id: id}, {
        name: obj.name,
        address: obj.address,
        contactno: obj.contactno
    }, function (err, data) {
        if (err)
            res.send("error");
        else
            res.send("updated");
    });
});

router.delete("/:id", function (req, res) {
    var id = req.params.id;
    user.findByIdAndRemove(id, function (err, data) {
        if (err)
            res.send("error");
        else
            res.send("deleted");
    });
});

module.exports = router;