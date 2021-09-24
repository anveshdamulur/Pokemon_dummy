import React from 'react'

const PokemonInfo = ({details}) => {
    let result = details.Pokemon
    if(result){
        return(
            <div>
                <div className="text-center">
                  <h2>{result.name}</h2>
                </div>
            </div>
        )
    }
   
}

export default PokemonInfo