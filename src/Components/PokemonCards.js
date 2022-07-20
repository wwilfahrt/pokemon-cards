import React, { useState } from 'react';
import { Row, Col, Container, ButtonGroup, ToggleButton, Form } from 'react-bootstrap';
import { Typography, FormControl, Select, option } from '@mui/material';
import SingleCard from './SingleCard';
import './PokemonCards.css'
import SearchBar from './SearchBar';
import { addToDeck } from '../redux/myDeckSlice';
import logo from '../assets/logo.png';
import 'bootstrap/dist/css/bootstrap.css';

const PokemonCards = (props) => {
  const [query, setQuery] = useState("");
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

  const handleRadioChange = e => {
    setSortBy(e.target.value)
  }

  return (
    <div>
      <Container fluid>
        <Row>
        <Col>
        <img src={logo} alt="pokemon logo" height="auto" width="175px" />
        </Col>
        </Row>
        <Row>
        <Col>
        <SearchBar
            query={query}
            onChange={(event) => {
                setQuery(event.target.value);
            }}
        />
        </Col>
        <Col>
        <h6>Type:</h6>
        <Form.Select
          sx={{width: "20%", paddingBottom: "20px"}}
          value={type}
          onChange={(event) => {
            setType(event.target.value);
          }} 
        >
            <option value="All" >All</option>
            <option value="normal" >Normal</option>
            <option value="fire" >Fire</option>
            <option value="water" >Water</option>
            <option value="grass" >Grass</option>
        </Form.Select>
        </Col>
        <Col>
          <ButtonGroup>
              <h6>Sort by:</h6>
              <ToggleButton type="radio" name="radio" value="alphabetical" onChange={handleRadioChange} >
                A-Z
              </ToggleButton>
              <ToggleButton type="radio" name="radio" value="numerical" onChange={handleRadioChange} >
                Pokedex No.
              </ToggleButton>
          </ButtonGroup>
        </Col>
        </Row>
      </Container> 
      <Container> 
          <Row>
            {sortedPokemon.map(pokemon => {
            return (
            <Col xs={6} md={4} lg={3}>
            <SingleCard key={pokemon.id} pokemon={pokemon} />
            </Col>)}
            )}
          </Row>
          </Container>  
    </div>
  );


}

export default PokemonCards;