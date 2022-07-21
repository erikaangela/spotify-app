// import axios from "axios";
// import SpotifyWebApi from "spotify-web-api-js";

// // const Spotify = require("spotify-web-api-js");
// // const s = new Spotify();

// export const SpotifyAuth = async () => {
//   //   const spotifyApi = new SpotifyWebApi();

import axios from "axios";

export const getAuth = async () => {
  const { REACT_APP_CLIENT_ID, REACT_APP_CLIENT_SECRET } = process.env;

  try {
    const response = await axios("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic " +
          window.btoa(REACT_APP_CLIENT_ID + ":" + REACT_APP_CLIENT_SECRET),
      },
      data: "grant_type=client_credentials",
    }).then((response) => {
      console.log(response);
    });
  } catch (error) {
    console.log(error);
  }
};
