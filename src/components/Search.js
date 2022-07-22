import React, { useState } from "react";
import { getAuth } from "./SpotifyAuth";
import Card from "./Card";

// import SpotifyWebApi from "spotify-web-api-js";

// // const Spotify = require("spotify-web-api-js");
// // const s = new Spotify();

// const spotifyApi = new SpotifyWebApi();

const Search = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // if (!results) {
  //   setIsLoading(true);
  // }

  getAuth();

  // renderResults = results.map(<Card />)

  return (
    <div>
      <form className={`ui ${isLoading ? "loading" : null} form`}>
        <div className="field">
          <input
            type="text"
            name="search"
            placeholder="Search by song..."
            autoComplete="off"
          />
        </div>
      </form>
      <div className="ui four cards">{/* {renderResults} */}</div>
    </div>
  );
};

export default Search;
