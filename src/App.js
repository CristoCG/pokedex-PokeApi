import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Pokedex from "./components/Pokedex";

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Pokedex />
      </div>
    </>
  );
}

export default App;
