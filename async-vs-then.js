const axios = require("axios");

// This function does exactly the same thing as the function below
// Uncomment to try it out (make sure to comment the other one though)
//
// function getStuffFromAxios() {
//   axios
//     .get("https://xkcd.now.sh/?comic=303")
//     .then(response => {
//       console.log("I got a nice image for you:", response.data.img);
//     })
//     .catch(e => {
//       console.error(e);
//     });
// }

async function getStuffFromAxios() {
  try {
    const response = await axios.get("https://xkcd.now.sh/?comic=303");
    console.log("I got a nice image for you:", response.data.img);
  } catch (e) {
    console.error(e);
  }
}

getStuffFromAxios();
