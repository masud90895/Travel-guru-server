const express = require('express');
const app = express();
var cors = require('cors');
const port = process.env.port || 5000;
app.use(cors())


const places= require('./projects.json')


app.get('/', (req, res) => {
  res.send(places)
})

app.get('/place/:id', (req, res) => {
    const id = req.params.id;
    const place = places.find(pl=> pl.id === id);
  res.send(place)
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = app;