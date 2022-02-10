//localhost:8000/qu
const express = require('express');

const app = express();
app.get("/qu", (req, res) => {
    try {
        res.sendFile("index.html", { root: __dirname });
    } catch (err) {
        console.log(err);
    }
});

const port = 8000; // you can use any port
app.listen(port);
console.log('server on ' + port);
