const express = require('express');

var app = express();

var data = [
    {
        name: 'Han Solo',
        occupation: 'Smuggler',
        debt: true,
        weapon: 'Blaster Pistol',
        id: 1
    }, {
        name: 'Luke Skywalker',
        occupation: 'Jedi Knight',
        debt: false,
        weapon: 'Lightsaber',
        id: 2
    }
];


app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get('/characters', function (req, res) {
    res.send(data);
});

app.post('/characters', function (req, res) {
    var character = {
        name: req.body.name,
        occupation: req.body.occupation,
        debt: req.body.debt || false,
        weapon: req.body.weapon,
        id: data.length + 2
    };
    data.push(character);

    res.send({ id: character.id });
});


var server = app.listen(process.env.PORT || 3000, function () {
  var host = server.address().address
  var port = server.address().port

  console.log('App listening at http://%s:%s', host, port)

})