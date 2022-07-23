import axios from "axios";
import qs from "qs";

const Buffer = require("buffer/").Buffer;

export const getAuth = async () => {
  const clientId = process.env.REACT_APP_CLIENT_ID;
  const clientSecret = process.env.REACT_APP_CLIENT_SECRET;

  const headers = {
    Accept: "application/json",
    Authorization:
      "Basic " + new Buffer(clientId + ":" + clientSecret).toString("base64"),
    "Content-Type": "application/x-www-form-urlencoded",
  };
  const data = {
    grant_type: "client_credentials",
  };

  try {
    const response = await axios("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + btoa(clientId + ":" + clientSecret),
      },
      data: "grant_type=client_credentials",
    }).then((response) => {
      console.log(response);
    });
  } catch (error) {
    console.log(error);
  }
};
