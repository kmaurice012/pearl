
import axios from "axios";


  const apiClient = axios.create({
    baseURL: `http://localhost:3000`,
    withCredentials: false, // This is the default
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  apiClient
    .get("/gamers")
    .then((response) => {
      sessionStorage.setItem("gamers", JSON.stringify(response.data));
      console.log(response.data, "thiiiiiiiiiiiiiiiiiiis is the");
      let test = response.data
      console.log(test,"teeeeeeeeeeeeeeeeeeeeeeeeesttttttttttttttttttttt");
      sessionStorage.setItem("test", test);
    })
    .catch((error) => {
      console.log(error);
    });
    let Gamers = JSON.parse(sessionStorage.gamers);
    JSON.stringify(Gamers)
    let testing = sessionStorage.test
    console.log(testing,);
    
 console.log(Gamers, "this is the obj");

export default {
    Gamers
}