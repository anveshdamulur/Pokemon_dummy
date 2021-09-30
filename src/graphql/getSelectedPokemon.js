export const GET_SELECTED_POKEMON = `
    query Pokemon($name: String!) {
        Pokemon(name: $name){
        id
        name
        image
        abilities {
            name
        }
        stats {
            name
            value
        }
        types {
            name
        }
    }
    }
`;
