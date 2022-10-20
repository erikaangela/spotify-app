import React, { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";

import { getAuth } from "./SpotifyAuth";
import Card from "./Card";
import "../stylesheet.css";

const Search = () => {
  const spotifyApi = new SpotifyWebApi();

  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    getAuth();
  }, [results]);

  const onSubmit = (e) => {
    e.preventDefault();
    getAuth();

    if (!term.trim()) {
      console.log("Invalid input");
    } else {
      spotifyApi.searchTracks(term, { limit: 50 }).then((data) => {
        const renderTrackDetails = data.tracks.items.map((item) => {
          const { id, name, artists, album, external_urls } = item;
          return {
            trackId: id,
            title: name,
            artist: artists[0].name,
            image: album.images[0].url,
            link: external_urls.spotify,
          };
        });

        if (data.tracks.items.length === 0) {
          console.log("No results found");
        }

        setResults(renderTrackDetails);
      });
    }

    setTerm("");
  };

  const renderResults = results.map((result) => {
    return <Card result={result} key={result.trackId} />;
  });

  return (
    <div>
      <form className="ui form" onSubmit={onSubmit}>
        <div className="field">
          <input
            type="text"
            name="search"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            placeholder="Search by title, artist, or album..."
            autoComplete="off"
          />
        </div>
      </form>
      <div className="ui four doubling cards">{renderResults}</div>
    </div>
  );
};

export default Search;
