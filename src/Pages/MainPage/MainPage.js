import "./MainPage.css";

import { useQuery } from "graphql-hooks";
import React, { useState } from "react";

import PokemonSelector from "../../Components/PokemonSelector/PokemonSelector";
import Squad from "../../Components/Squad/Squad";
import { GET_ALL_POKEMONS } from "../../graphql/getAllPokemons";

const MainPage = () => {
  const [squads, setSquads] = useState([null, null, null, null, null, null]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const { loading, error, data } = useQuery(GET_ALL_POKEMONS, {
    variables: {
      first: 151,
    },
  });

  if (loading) return <div>Loading...</div>;

  if (error) {
    console.error(error);
    return <div>Error!</div>;
  }

  return (
    <>
      <div className="grid-container">
        <PokemonSelector
          pokemons={data.Pokemons}
          onSaveHandler={(value) => {
            const newSquads = [...squads];
            const findFirstIndexOfNull = newSquads.indexOf(null);
            if (findFirstIndexOfNull >= 0) {
              newSquads[findFirstIndexOfNull] = value;
              setSquads(newSquads);
            }
          }}
        />
      </div>
      <div className="footer">
        <h1>SELECTED SQUAD</h1>
        <div className="selected_squad">
          {squads.map((squad, index) => (
            <Squad key={`squad-${index}`} data={squad}></Squad>
          ))}
        </div>
      </div>
    </>
  );
};

export default MainPage;
