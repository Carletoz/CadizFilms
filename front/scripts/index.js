
const renderCards = require("./renderCards")
const axios = require("axios")


const main = async () =>{
    console.log("Todo esta saliendo bien");
    const response =  await axios.get("http://localhost:3000/movies");
    renderCards(response.data);
}

main();