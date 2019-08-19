const http = require("http");
const express = require('express');
import http from "https";
import express from "express";

const PATHS = process.env.PATHS.split("\n");

setInterval(() => {
    PATHS.forEach(url => {
      http.get(url, () => {
        console.log(`${url} called at ${new Date().toISOString()}`)
      });
    })
}, 60000);


const app = express()
 
app.get('/', () => {
  res.send('Up and running!')
})
 
app.listen(3000)