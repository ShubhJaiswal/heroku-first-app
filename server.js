const express = require('express');

const path = require('path');

const app = express();

app.use(express.static('./dist/angular-life'));

app.get('/*', function(req,res) {
    res.sendFile('index.html',{root:'dist/angular-life/index.html'});
});

app.listen(process.env.PORT || 8080);