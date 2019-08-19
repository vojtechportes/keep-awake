var http = require("http");

setInterval(function() {
    http.get("http://react-query-builder-demo.herokuapp.com");
    http.get("http://node-keep-awake.herokuapp.com");
}, 60000);