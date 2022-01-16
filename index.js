const express = require('express');
const app = express(); //nowa aplikacja instancja expressa
const {port} = require('./config'); //zaczytanie pliku config.js np. do portu
const apiRouter = require('./routes/api');


//routes (nasze ścieżki)
app.use('/', apiRouter); //użycie ścieżki przez api

//serwer
app.listen(port, function() {  //uruchomienie serwera
    console.log('serwer słucha...http://localhost:' + port);
});

