import { useQuery } from 'graphql-hooks';
import React, { useState } from 'react'
import { GET_SELECTED_POKEMON } from '../graphql/getSelectedPokemon';
import PokemonInfo from './PokemonInfo';
import "./Selected_Pokemon.css"
const Selected_Pokemon = ({data}) => {
    const [searchInput, setSearchInput] = useState("");    
    const listItem  = useQuery(GET_SELECTED_POKEMON, {
        variables :{
            name : searchInput
        }
    })
    return(
        <div className= "pokemon_container">
            <div className="pokemon_container_details">
                <h1 id="heading">SELECT A POKEMON</h1>
                <input type="text" id="input_value" name="inpuValue" placeholder="TYPE TO FILTER" onChange={e => {setSearchInput(e.target.value)}} />
                {
                data.length && data.filter((info) =>{
                    if(searchInput === ""){
                        // console.log(searchInput)
                        return info
                    }
                    else if (info.name.toLowerCase().includes(searchInput.toLowerCase())){
                        return info
                    }
                }).map(info => {                  
                        return (
                            <div key = {info.id} className="pokemon-list">
                              <h1 className="list-names">{info.name.toUpperCase()}</h1>
                              {(info.name === searchInput)? <PokemonInfo details = {listItem.data}/> : ""}
                            </div>                      
                            )            
                    })
                }
            </div>
        </div>
    )
}

export default Selected_Pokemon
