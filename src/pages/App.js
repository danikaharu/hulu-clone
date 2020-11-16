import React, { useState } from "react";
import Header from "../component/Header";
import Nav from "../component/Nav";
import Results from "../component/Results";
import "./App.css";
import requests from "../config/requests";

function App() {
  const [selectedOption, setSelectedOption] = useState(requests.fetchTrending);

  return (
    <div className="app">
      <Header />
      <Nav setSelectedOption={setSelectedOption} />
      <Results selectedOption={selectedOption} />
    </div>
  );
}

export default App;
