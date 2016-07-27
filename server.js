var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var apiRoutes = require("./server/routes/api.routes.js");
var webRoutes = require("./server/routes/web.routes.js");

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "app")));
app.use(express.static(path.join(__dirname, "bower_components")));

app.use("/", webRoutes);
app.use("/api", apiRoutes);

var port = process.env.PORT || 2300;
app.listen(port);

console.log("Server is running at : http://localhost:" + port);