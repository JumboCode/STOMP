//import app from './app';
//var app = require('app');
var path = require('path');
var express = require('express');
var app = express();

const port = process.env.PORT || 8080;
const publicPath = express.static(path.join(__dirname, '../public/'));
const indexPath = path.join(__dirname, '../public/index.html');

app.use(publicPath);

app.get('/', (req, res) => {
    res.sendFile(indexPath);
})

//export default app;

app.listen(port);
console.log(`Listening at http://localhost:${port}`);
