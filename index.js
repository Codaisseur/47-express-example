// PLAN

// INSTALL
// - npm init -> package.json
// - npm install express
//  - express -> node_modules
//  - express -> dependency in package.json, package-lock.json
// - require('express')
//

const express = require("express");

// created our server
const app = express();

// defined a constant that contains the port we want to run our server on
const port = 3000;

// started the server on the 3000 port
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

// define an endpoint
app.get("/", (request, response) => {
  return response.send("Hello world");
});
