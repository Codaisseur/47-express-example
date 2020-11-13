// PLAN

// INSTALL
// - npm init -> package.json
// - npm install express
//  - express -> node_modules
//  - express -> dependency in package.json, package-lock.json
// - require('express')
//

// INIT GIT
// - create remote repository, for example on github (optional)
// - git init -> initialize repo locally
// - add .gitignore file that contains "node_modules" -> so we don't commit modules
// - git add . / add from VSCODE -> stage changes for commit
// - git commit -m "" / commit from VSCODE -> commit the changes

const express = require("express");

// created our server
const app = express();

// defined a constant that contains the port we want to run our server on
const port = 3000;

// HTML string
const document = `<html>
  <head>
    <title>Test page</title>
  </head>

  <body>
    <p>Hello class 47!</p>
  </body>
</html>`;

// started the server on the 3000 port
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

// define an endpoint
app.get("/", (request, response) => {
  return response.send(document);
});
