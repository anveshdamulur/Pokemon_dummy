import "./PokemonInfo.css";

import { useQuery } from "graphql-hooks";
import React, { useState } from "react";

import { GET_SELECTED_POKEMON } from "../../../graphql/getSelectedPokemon";
import Stat from "./Stat/Stat";
import Move from "./Move/Move";

const PokemonInfo = ({ selectedPokemon, onSave }) => {
  const [abilities, setAbilities] = useState([]);
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

  if (data && data?.Pokemon) {
    // setAbilities(data?.Pokemon.abilities);
  }

  return (
    <>
      {data && (
        <div className="pokemon_info">
          <div className="pokemon_info_data">
            <img
              src={data?.Pokemon.image}
              alt="Avatar"
              style={{ width: "100%" }}
            />
            <h1>{data?.Pokemon.name}</h1>
            <button
              className="pokemon_info_data_save"
              onClick={() => onSave(data?.Pokemon)}
            >
              SAVE POKEMON
            </button>
          </div>
          <div className="pokemon_info_capabilities">
            <h2>STATS</h2>
            <div className="pokemon_info_stat">
              {data?.Pokemon.stats.map((stat) => (
                <Stat
                  key={`${data?.Pokemon.id}-${stat.name}`}
                  name={stat.name}
                  value={stat.value}
                ></Stat>
              ))}
            </div>
            <div className="pokemon_info_ability">
              {data?.Pokemon.abilities.map((ability) => (
                <Move
                  key={`${data?.Pokemon.id}-${ability.name}`}
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
                  key={`${data?.Pokemon.id}-${level}`}
                  onClick={() => console.log("say hi")}
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
