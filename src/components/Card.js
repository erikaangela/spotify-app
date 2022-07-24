import React from "react";

import "../stylesheet.css";

const Card = ({ result }) => {
  return (
    <a className="ui card" href={result.link} target="_blank">
      <div className="image">
        <img src={result.image} />
      </div>
      <div className="content">
        <div className="header">{result.title}</div>
        <div className="meta">{result.artist}</div>
      </div>
    </a>
  );
};

export default Card;
