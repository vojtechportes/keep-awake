const http = require("http");
const express = require('express');

const PATHS = process.env.PATHS.split("\n");
const PORT = process.env.PORT || 3000;

setInterval(function() {
    PATHS.forEach(function(url) {
      http.get(url, function() {
        console.log(`${url} called at ${new Date().toISOString()}`)
      });
    })
}, 60000);


const app = express()
 
app.get('/', function(req, res) {
  res.send('Up and running!')
})
 
app.listen(PORT)