import React from "react";

import Header from "./Header";
import Search from "./Search";
import "../stylesheet.css";

const App = () => {
  return (
    <div className="ui container">
      <Header />
      <Search />
    </div>
  );
};

export default App;
