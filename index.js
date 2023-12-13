const app = require('./index');

// MICROSERVICES ON PORT: 
app.listen( process.env.PORT, () => {
    console.log(`Server starting on port: ${process.env.PORT}`);
});
