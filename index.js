
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

app.use(urlencoded({ extended: false}));

// MICROSERVICE ROUTES

app.use( require('./src/routes') );

app.get('/', (req, res, next) => {
    res.json({
        ok: true,
        data: 'Tokenization Service'
    })
});

// MICROSERVICES ON PORT: 
app.listen( process.env.PORT, () => {
    console.log(`Server starting on port: ${process.env.PORT}`);
});