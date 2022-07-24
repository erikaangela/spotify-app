import React from "react";

const Card = (id, src) => {
  return (
    <div className="ui green card" key={id}>
      <a className="image" href="#">
        <img src={src} />
      </a>
      <div className="content">
        <a className="header" href="#">
          Song
        </a>
        <div className="meta">
          <a>Artist</a>
        </div>
      </div>
    </div>
  );
};

export default Card;
