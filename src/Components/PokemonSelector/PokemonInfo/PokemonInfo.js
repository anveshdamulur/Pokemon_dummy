import "./PokemonInfo.css";

import { useQuery } from "graphql-hooks";
import React, { useState, useEffect } from "react";

import { GET_SELECTED_POKEMON } from "../../../graphql/getSelectedPokemon";
import Stat from "./Stat/Stat";
import Move from "./Move/Move";

const PokemonInfo = ({ selectedPokemon, onSave }) => {
  const [pokemon, setPokemon] = useState(null);
  const tutorMoves = [
    "Slam",
    "Stomp",
    "Wrap",
    "Supersonic",
    "Disable",
    "Screech",
    "Defence curl",
    "Lick",
    "Rollout",
    "Knock off",
    "Refresh",
    "Wring out",
    "Me first",
    "Power whip",
    "Chip away",
  ];

  const { loading, error, data } = useQuery(GET_SELECTED_POKEMON, {
    variables: {
      name: selectedPokemon?.name,
    },
  });

  useEffect(() => {
    if (!loading && data) {
      setPokemon(data?.Pokemon);
    }
  }, [loading, data]);

  return (
    <>
      {pokemon && (
        <div className="pokemon_info">
          <div className="pokemon_info_data">
            <img src={pokemon.image} alt="Avatar" style={{ width: "100%" }} />
            <h1>{pokemon.name.toUpperCase()}</h1>
            <button
              className="pokemon_info_data_save"
              onClick={() => onSave(pokemon)}
            >
              SAVE POKEMON
            </button>
          </div>
          <div className="pokemon_info_capabilities">
            <h2>STATS</h2>
            <div className="pokemon_info_stat">
              {pokemon.stats.map((stat) => (
                <Stat
                  key={`${pokemon.id}-${stat.name}`}
                  name={stat.name}
                  value={stat.value}
                ></Stat>
              ))}
            </div>
            <div className="pokemon_info_ability">
              {pokemon.abilities.map((ability) => (
                <Move
                  key={`${pokemon.id}-${ability.name}`}
                  move={ability.name}
                ></Move>
              ))}
            </div>
          </div>
          <div className="pokemon_info_tutor_machine">
            <h2>
              TUTOR MACHINE <u>LEVEL-UP</u>
            </h2>
            <ul className="pokemon_info_tutor_machine_list">
              {tutorMoves.map((level) => (
                <li
                  key={`${pokemon.id}-${level}`}
                  id={level}
                  onClick={(e) => {
                    const newAbilities = [...pokemon.abilities];
                    const levelIndex = newAbilities
                      .map((a) => a.name)
                      .indexOf(level);
                    if (levelIndex >= 0) {
                      newAbilities.splice(levelIndex, 1);
                    } else {
                      if (pokemon.abilities.length === 4) return;
                      newAbilities.push({ name: e.target.id });
                    }
                    const newPokemon = {
                      ...pokemon,
                      abilities: newAbilities,
                    };
                    setPokemon(newPokemon);
                  }}
                >
                  {level}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default PokemonInfo;
