import React from "react";
import "./pokemon.css";

export default function Pokemon(props) {
  const { pokemon } = props;
  return (
    <>
      <div className="pokemonCard">
        <div className="pokemonImg">
          <img
            alt={pokemon.name}
            loading="lazy"
            src={pokemon.sprites.front_default}
            height={80}
            width={80}
          />
        </div>
        <div className="cardBody">
          <div className="cardTop">
            <h3>{pokemon.name}</h3>
            <div>#{pokemon.id}</div>
          </div>
          <div className="cardBottom">
            <div className="pokemonType">
              {pokemon.types.map((type, idx) => {
                return (
                  <div className="typeText" key={idx}>
                    {type.type.name}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
