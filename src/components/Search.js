import React from "react";
import SpotifyWebApi from "spotify-web-api-js";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

const Spotify = require("spotify-web-api-js");
const s = new Spotify();

const spotifyApi = new SpotifyWebApi();

class Search extends React.Component {
  render() {
    return <div>Search</div>;
  }
}

export default Search;
