import React from 'react';
import PokemonCards from './PokemonCards';
import useApi from '../hooks/useApi';

function PokemonCardsContainer() {
 const pokemonList = useApi();

  return (
    <PokemonCards pokemonList={pokemonList} />
  )
}

export default PokemonCardsContainer;