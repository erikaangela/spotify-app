import React from "react";

import Header from "./Header";
import Search from "./Search";

const Spotify = require("spotify-web-api-js");
const s = new Spotify();

const spotifyApi = new SpotifyWebApi();

const App = () => {
  return (
    <div>
      <Header />
      <Search />
    </div>
  );
};

export default App;
