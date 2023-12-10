const app = require('express')();


app.use( '/materials', require('./create') );
app.use( '/materials', require('./get') );
app.use( '/materials', require('./price') );

module.exports = app;