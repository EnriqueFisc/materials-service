
require('./src/config');
require('./src/database');
const express = require('express');
const cors    = require('cors');
const app     = express();

const { 
    json, 
    urlencoded 
} = express;

// MICROSERVICE CONFIG

app.use( cors({
    origin: '*'
}));

app.use( json() );

app.use(urlencoded({ extended: true}));

// MICROSERVICE ROUTES

app.use( require('./src/routes') );

// DOCUMENTATION ROUTE
app.use( require('./src/apiDoc/swagger') );

app.get('/', (req, res, next) => {
    res.json({
        ok: true,
        data: 'Tokenization Service'
    })
});

module.exports = app