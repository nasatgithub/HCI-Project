var express = require('express');
var cookieParser = require('cookie-parser');
var session      = require('express-session');
var passport = require('passport');

var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(session({ secret: "sdfsdfsdf" }));

app.use(passport.initialize());
app.use(passport.session());

// configure a public directory to host static content
app.use(express.static(__dirname + '/public'));

// require ("./test/app.js")(app);

var ipaddress = process.env.IP;
var port      = process.env.PORT || 3000;

require("./assignment/app.js")(app);
// require("./experiments/app.js")(app);
require("./experiments/todos.js")(app);

app.listen(port, ipaddress);
