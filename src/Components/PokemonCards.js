import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Grid, Button, Card, CardMedia, Typography, CardActionArea, FormControl, Select, MenuItem, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import SingleCardModal from './SingleCardModal';
import './PokemonCards.css'
import SearchBar from './SearchBar';
import { addToDeck } from '../redux/reducer';

const PokemonCards = (props) => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [clickedCard, setClickedCard] = useState({});
  const [type, setType] = useState("");
  const [sortBy, setSortBy] = useState("");
  
  const pokemonList = props.pokemonList;

  const getSearchedPokemon = (query, pokemonList) => {
    if (!query) {
      return pokemonList;
    }
      return pokemonList.filter(pokemon => pokemon.name.toLowerCase().includes(query.toLowerCase()))
  }

  const searchedPokemon = getSearchedPokemon(query, pokemonList);

  const getFilteredPokemon = (type, searchedPokemon) => {
      if (type === "" || type === "All") {
          return searchedPokemon;
      }
      return searchedPokemon.filter(pokemon => pokemon.types[0].type.name.toLowerCase().includes(type.toLowerCase()))
  }

  const filteredPokemon = getFilteredPokemon(type, searchedPokemon);

  const getSortedPokemon = (sortBy, filteredPokemon) => {
      if (sortBy === "numerical") {
        return filteredPokemon.sort(function(a, b)
        {
          let pokemon1 = a.id;
          let pokemon2 = b.id;
        
          if(pokemon1 < pokemon2)
            return -1;
          else if(pokemon1 > pokemon2)
            return 1;
         return 0;
        });
      }
        return filteredPokemon.sort(function(a, b)
        {
          let pokemon1 = a.name.toLowerCase();
          let pokemon2 = b.name.toLowerCase();
        
          if(pokemon1 < pokemon2)
            return -1;
          else if(pokemon1 > pokemon2)
            return 1;
         return 0;
        });
  }

  const sortedPokemon = getSortedPokemon(sortBy, filteredPokemon);

  const modalHandler = (id) => {
      setClickedCard(state => ({
          ...state,
          [id] : !state[id]
      })
      )
      setShowModal(true);
  }

  const closeModal = () => {
      setShowModal(false);
  }

  const add = (event) => {
      dispatch(addToDeck(event.target.value));
  };

  return (
    <div>
        <SearchBar
            value={query}
            onChange={(event) => {
                setQuery(event.target.value);
            }}
        />
        <FormControl sx={{width: "20%", padding: "20px"}} >
        <div>
        <Typography>Type:</Typography>
        <Select
            label="Type"
            defaultValue="alphabetical"
            value={type}
            onChange={(event) => {
                setType(event.target.value);
            }}
        >
            <MenuItem value="All" >All</MenuItem>
            <MenuItem value="normal" >Normal</MenuItem>
            <MenuItem value="fire" >Fire</MenuItem>
            <MenuItem value="water" >Water</MenuItem>
            <MenuItem value="grass" >Grass</MenuItem>
        </Select>
        </div>
        </FormControl>
        <FormControl>
        <FormLabel>Sort By:</FormLabel>
        <RadioGroup
            name="sort"
            value={sortBy}
            onChange={(event => {
                setSortBy(event.target.value);
            })}
        >
            <FormControlLabel value="alphabetical" control={<Radio />} label="A-Z" />
            <FormControlLabel value="numerical" control={<Radio />} label="PokeDex No." />
        </RadioGroup>
        </FormControl>
        <Grid container spacing={4}
            direction="row"
            justifyContent="space=evenly"
            alignItems="center"
        >
            {sortedPokemon.map(pokemon =>
            <Grid 
                item 
                xs={4} sm={3} md={1.5} 
                key={pokemon.id}
            >
            <Card variant="outlined" >
                <CardActionArea 
                    onClick={() => {
                        modalHandler(pokemon.id)
                    }}>
                <Typography variant="h6" textAlign="center" >{pokemon.name}</Typography>
                <CardMedia
                    component="img"
                    image={pokemon.sprites.front_default}
                    alt={pokemon.name}
                />
                {clickedCard[pokemon.id] && <SingleCardModal show={showModal} handleClose={closeModal} pokemonId={pokemon.id} pokemon={pokemon} />}
            </CardActionArea>
            <Button id={pokemon.id} value={pokemon.name} onClick={(event) => add(event)}>Add to Deck</Button>
          </Card>
        </Grid>)}
      </Grid>
    </div>
  );


}
export default PokemonCards;