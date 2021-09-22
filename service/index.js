var menus = require('./data/restaurantesMenus.json')
var users = require('./data/users.json')
var express = require('express');
var app = express();
var cors = require('cors');

app.use(express.json())
app.use(cors());


function getRestaurant(idx) {
    const i = idx + 1;
    return {
        'id': i,
        'name': 'Restaurante ' + i,
        'phone': '+34 000 000 000',
        'menu': [
            {
                'key': 'primeros',
                'items': [
                    'Plato 1 '  + i,
                    'Plato 2 '  + i,
                    'Plato 3 ' + i,
                ]
            },
            {
                'key': 'segundos',
                'items': [
                    'Plato 1b '  + i,
                    'Plato 2b '  + i,
                    'Plato 3b ' + i,
                ]
            }
        ],
        'price': 10 + +(Math.random() * 10).toFixed(0),
        'onlineEnabled': true
    }
}


app.get('/menus', function (req, res) {
    const start = +req.query.start;
    const limit  = +req.query.limit;
    const results = [...Array(limit).keys()].map(key => getRestaurant(start + key))
    res.send(JSON.stringify({
        start,
        limit,
        count: 187,
        results,
    }));
})


app.post('/login', function (req, res) {
    console.log(req.body);
    const {login, password} = req.body;
    const user = users.find(u => u.login === login && u.password === password);
    if(user){
        res.setHeader('Content-type', 'application/json');
        res.status(200);
        res.end(JSON.stringify(user));
        return;
    }
    res.status(403)
    res.end(null);
})

var port = 3001;
app.listen(port, () => {
    console.log('started')
})
