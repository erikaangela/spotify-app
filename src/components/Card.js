import React from "react";

const Card = () => {
  return (
    <div className="ui green card">
      <a className="image" href="#">
        <img src="/images/avatar/large/steve.jpg" />
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
