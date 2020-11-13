const axios = require("axios");

function returnPromise() {
  return new Promise((resolve, reject) => {
    // get stuff from internet
    // take some to do it
    const data = "Hello 47";
    console.log("HELLO, I am starting the request");
    resolve(data);
  });
}

async function getYahoo() {
  console.log("1. hello from getYahoo");
  // const response = await axios.get("https://xkcd.now.sh/?comic=303");
  const response = await returnPromise();
  console.log("4. hello now that I have the data");
  // console.log(response.data);
}

function syncFunction() {
  console.log("2. hello");
  console.log("3. hello again");
}

getYahoo();
syncFunction();
