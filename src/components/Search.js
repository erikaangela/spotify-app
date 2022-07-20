import React from "react";
import { getAuth } from "./SpotifyAuth";

class Search extends React.Component {
  componentDidMount() {
    getAuth();
  }
  render() {
    return <div>Search</div>;
  }
}

export default Search;
