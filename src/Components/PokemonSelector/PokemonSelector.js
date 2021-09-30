import "./PokemonSelector.css";

import React, { useState } from "react";

import PokemonInfo from "./PokemonInfo/PokemonInfo";

const PokemonSelector = ({ pokemons, onSaveHandler }) => {
  const [searchInput, setSearchInput] = useState("");
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  return (
    <div className="pokemon_container">
      <div className="pokemon_container_details">
        <div className="pokemon_container_details_list">
          <h1 id="heading">SELECT A POKEMON</h1>
          <input
            type="text"
            id="input_value"
            name="inputValue"
            placeholder="TYPE TO FILTER"
            onChange={(e) => setSearchInput(e.target.value)}
          />
          {pokemons?.length &&
            pokemons
              .filter((info) =>
                info.name.toLowerCase().includes(searchInput.toLowerCase())
              )
              .map((info) => {
                return (
                  <div
                    key={info.id}
                    id="pokemon_item"
                    className="pokemon-list"
                    onClick={(e) => setSelectedPokemon(info)}
                  >
                    <h1 className="list-names">{info.name.toUpperCase()}</h1>
                  </div>
                );
              })}
        </div>
      </div>
      {selectedPokemon && (
        <div className="pokemon_selected">
          <PokemonInfo
            selectedPokemon={selectedPokemon}
            onSave={onSaveHandler}
          />
        </div>
      )}
    </div>
  );
};

export default PokemonSelector;
