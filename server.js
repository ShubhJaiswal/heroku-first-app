const express = require('express');

const path = require('path');

const app = express();

app.use(express.static('./dist/aheroku-first-app'));

app.get('/*', function(req,res) {
    res.sendFile('index.html',{root:'dist/heroku-first-app/index.html'});
});

app.listen(process.env.PORT || 8080);
