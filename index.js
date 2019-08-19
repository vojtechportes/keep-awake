const http = require("http");
const express = require('express');

const PATHS = process.env.PATHS.split("\n");

setInterval(function() {
    PATHS.forEach(function() {
      http.get(url, function() {
        console.log(`${url} called at ${new Date().toISOString()}`)
      });
    })
}, 60000);


const app = express()
 
app.get('/', function() {
  res.send('Up and running!')
})
 
app.listen(3000)