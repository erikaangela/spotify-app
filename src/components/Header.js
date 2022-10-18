import React from "react";

import "../stylesheet.css";

const Header = () => {
  return (
    <h1
      className="ui center aligned icon inverted header"
      data-testid="header-1"
    >
      <i className="circular spotify icon"></i>
      Spotify Search
    </h1>
  );
};

export default Header;
