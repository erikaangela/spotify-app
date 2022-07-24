import axios from "axios";
import SpotifyWebApi from "spotify-web-api-js";

export const getAuth = async () => {
  const spotifyApi = new SpotifyWebApi();
  const { REACT_APP_CLIENT_ID, REACT_APP_CLIENT_SECRET } = process.env;

  try {
    const response = await axios("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic " + btoa(REACT_APP_CLIENT_ID + ":" + REACT_APP_CLIENT_SECRET),
      },
      data: "grant_type=client_credentials",
    }).then((response) => {
      spotifyApi.setAccessToken(response.data.access_token);
    });
  } catch (error) {
    console.log(error);
  }
};
