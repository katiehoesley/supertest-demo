const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));

const PORT = 8080
app.get('/user', (req, res) => {
    res.status(200).json({ name: "Katie" })
})


const server = app.listen(PORT);
module.exports = server; 

//or module.exports = app.listen(PORT)