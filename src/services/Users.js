
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
      localStorage.setItem("gamers", JSON.stringify(response.data));
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
    let Gamers = JSON.parse(localStorage.gamers);
 console.log(Gamers, "this is the obj");

export default {
    Gamers
}