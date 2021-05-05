var express = require("express");
const ejs = require('ejs');
var app = express();
app.set('view engine', 'ejs');
app.set('views', __dirname + '/public/views');
app.use(express.static(__dirname + '/public/'));
var port = 8080;
app.listen(port);
console.log("Listening on port " + port);

// *** GET Routes - display pages ***
// Root Route
app.get('/', function (req, res) {
    res.render('pages/index');
});
app.get('/action_1', function (req, res) {
    // Render index page
    res.render('pages/contact_stuff', {
        // EJS variable and server-side variable
    });
});
app.get('/action_2', function (req, res) {
    // Render index page
    res.render('pages/contact_stuff', {
        // EJS variable and server-side variable
    });
});
app.get('/action_3', function (req, res) {
    // Render index page
    res.render('pages/contact_stuff', {
        // EJS variable and server-side variable
    });
});
app.get('/action_4', function (req, res) {
    // Render index page
    res.render('pages/contact_stuff', {
        // EJS variable and server-side variable
    });
});