export const GET_ALL_POKEMONS = `
    query Pokemons($first : Int!){
        Pokemons(first : $first){
        id
        name
        }
    }
`;
