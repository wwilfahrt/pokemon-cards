import axios from 'axios';
import { useState, useEffect } from 'react';

export default function useApi() {

  const [pokemonList, setPokemonList] = useState([]);
  const url = 'https://pokeapi.co/api/v2/pokemon/';

async function getPokemonList() {
  const numberOfPokemon = 151;
    const promises = [];
    for (let i = 1; i < numberOfPokemon; i++) {
      const result = axios.get(url + i);
      promises.push(result)
    }
    const results = await Promise.all(promises);
    const actualData = results.map((result) => result.data);
    setPokemonList(actualData);
  }

  useEffect(() => {
    getPokemonList();
  }, [])

  return pokemonList;
};
