import React, { useState } from "react";
import { getAuth } from "./SpotifyAuth";
import Card from "./Card";

const Search = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState(null);

  // componentDidMount() {
  //   getAuth();
  // }

  // renderResults = results.map(<Card />)

  return (
    <div>
      <form className="ui form">
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
