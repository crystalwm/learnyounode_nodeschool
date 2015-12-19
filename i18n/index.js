/**
 * Created by John on 2015-10-31.
 */
// load modules
var express = require('express'),
    i18n = require('i18n-2');
var app=express();

// Attach the i18n property to the express request object
// And attach helper methods for use in templates
i18n.expressBind(app, {
    // setup some locales - other locales default to en silently
    locales: ['en', 'de'],
    // change the cookie name from 'lang' to 'locale'
    cookieName: 'locale'
});

// This is how you'd set a locale from req.cookies.
// Don't forget to set the cookie either on the client or in your Express app.
app.use(function(req, res, next) {
    req.i18n.setLocaleFromCookie();
    next();
});


app.get('/', function (req, res) {
    res.send('Hello World')
})

app.listen(3000)