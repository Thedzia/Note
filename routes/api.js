const express = require('express'); //zaczytanie expressa
const { append } = require('express/lib/response');
const router = express.Router(); //obiekt stoworzy przez express



router.get('/', function(req, res) {    //metoda get aby otworzyc w przeglądarce 
    res.send('Serwer działa!');
});

module.exports = router;