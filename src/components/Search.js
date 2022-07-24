import React, { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";

import { getAuth } from "./SpotifyAuth";
import Card from "./Card";

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

    if (!term) {
      console.log("You need to enter a song title");
    } else {
      spotifyApi.searchTracks(term).then((data) => {
        const renderTrackDetails = data.tracks.items.map((item) => {
          const { id, name, artists, album, href } = item;
          return {
            trackId: id,
            title: name,
            artist: artists[0].name,
            image: album.images[2].url,
            link: href,
          };
        });

        setResults(renderTrackDetails);
      });
    }
  };

  console.log(results);
  const renderResults = results.map((result) => {
    return <Card key={trackId} src={image} />;
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
            placeholder="Search by song title..."
            autoComplete="off"
          />
        </div>
      </form>
      <div className="ui four cards">{renderResults}</div>
    </div>
  );
};

export default Search;
