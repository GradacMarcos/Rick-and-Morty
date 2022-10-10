import axios from "axios";

export async function fetchData(url, callback) {
  axios
    .get(url)
    .then((res) => {
      callback(res.data);
    })
    .catch((e) => {
      console.log("No se pudo hacer el fetch a: " + url, "Error: " + e);
    });
}
