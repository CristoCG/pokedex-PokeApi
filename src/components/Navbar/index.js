import React, { useContext } from "react";
import "./navbar.css";

export default function Navbar() {
  let imgUrl =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

  return (
    <nav>
      <div />
      <div>
          <img
            alt="PokéAPI"
            src={imgUrl}
            className="navbar-image"
          />
      </div>
      <div></div>
    </nav>
  );
}
