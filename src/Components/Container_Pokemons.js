import { useQuery } from 'graphql-hooks'
import { GET_ALL_POKEMONS } from '../graphql/getAllPokemons'
import React from 'react'
import "./Container_Pokemons.css"
import Selected_Pokemon from './Selected_Pokemon'
const Container_Pokemons = () => {  
    const { loading, error, data } = useQuery(GET_ALL_POKEMONS, {
        variables :{
            first : 151
        }
    })
    if (loading) return 'Loading...'
    if (error) return 'Something bad happened' 
    console.log(data.Pokemons)
    return (   
        <div className="container_pokemons">
            <Selected_Pokemon 
                data = {data.Pokemons} 
            />
        </div>
        
    )
}

export default Container_Pokemons


// Add key to the pokemon component
// pass a prop of pokemon