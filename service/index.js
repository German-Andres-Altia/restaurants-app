var menus = require('./data/restaurantesMenus.json')
var users = require('./data/users.json')
var express = require('express');
var app = express();
var cors = require('cors');

app.use(express.json())
app.use(cors());



app.get('/menus', function (req, res) {
    setTimeout(() => {
        res.send(JSON.stringify(menus));
    }, 500)
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
