// import axios from "axios";
// import SpotifyWebApi from "spotify-web-api-js";

// // const Spotify = require("spotify-web-api-js");
// // const s = new Spotify();

// const Buffer = require("buffer/").Buffer;
// const qs = require("qs");

// // const data = qs.stringify({ grant_type: "client_credentials" });

// export const SpotifyAuth = async () => {
//   //   const spotifyApi = new SpotifyWebApi();

//   const { REACT_APP_CLIENT_ID, REACT_APP_CLIENT_SECRET } = process.env;

//   await axios
//     .post(
//       "https://accounts.spotify.com/api/token",
//       qs.stringify({ grant_type: "client_credentials" }),
//       {
//         headers: {
//           "Content-Type": "application/x-www-form-urlencoded",
//           Authorization: `Basic ${Buffer.from(
//             REACT_APP_CLIENT_ID + ":" + REACT_APP_CLIENT_SECRET
//           ).toString("base64")}`,
//         },
//       }
//     )
//     .then((response) => {
//       console.log(response.data.access_token);
//     });
// };

import axios from "axios";
import qs from "qs";

const Buffer = require("buffer/").Buffer;

export const getAuth = async () => {
  const clientId = process.env.REACT_APP_CLIENT_ID;
  const clientSecret = process.env.REACT_APP_CLIENT_SECRET;

  const headers = {
    headers: {
      Accept: "application/json",
      Authorization:
        "Basic " + new Buffer(clientId + ":" + clientSecret).toString("base64"),
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };
  const data = {
    grant_type: "client_credentials",
  };

  try {
    const response = await axios.post(
      "https://accounts.spotify.com/api/token",
      qs.stringify(data),
      headers
    );
    console.log(response.data.access_token);
  } catch (error) {
    console.log(error);
  }
};
