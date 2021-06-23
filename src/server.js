const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));

const port = 8080
app.get('/user', (req, res) => {
    res.status(200).json({ name: "Katie" })
})
  
app.get('/marco', (req, res) => {
    return res.send('POLO!')
})

app.get('/ping', (req, res) => {
    return res.send('pong!')
})

app.post('/users', (req, res) => {
    res.send({ name: "john" })
})

const server = app.listen(port);

module.exports = server; 