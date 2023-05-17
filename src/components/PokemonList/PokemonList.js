import React from "react";

function PokemonList({ searchTerm = "" }) {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=100`;

    const [list, setList] = React.useState([]);

    React.useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setList(data.results);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [url]);

    React.useEffect(() => {
        
    }, [list]);

    return (
        <ul>
            {list
                .filter((pokemon) => {
                    return pokemon.name.includes(searchTerm);
                })
                .map((pokemon) => (
                    <li key={pokemon.name}>{pokemon.name}</li>
            ))}
        </ul>
    );
}

export default PokemonList;
