import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Grid, Card, CardMedia, Typography, CardActionArea } from '@mui/material';

const UserDeckDisplay = ( userDeck ) => {
    const [deckInfo, setDeckInfo] = useState([]);
    const url = 'https://pokeapi.co/api/v2/pokemon/';

    async function getDeckInfo() {
        const promises = [];
    for (let i = 0; i < userDeck.length; i++) {
      const result = axios.get(url + userDeck[i]);
      promises.push(result)
    }
    const results = await Promise.all(promises);
    const actualData = results.map((result) => result.data);
    setDeckInfo(actualData);
    console.log(actualData);
    }

    useEffect(() => {
        getDeckInfo();
    }, [])

    return (
        <Grid container spacing={4}
            direction="row"
            justifyContent="space=evenly"
            alignItems="center"
        >
            {deckInfo.map(pokemon =>
            <Grid 
                item 
                xs={4} sm={3} md={1.5} 
                key={pokemon.id}
            >
            <Card variant="outlined" >
                <CardActionArea>
                <Typography variant="h6" textAlign="center" >{pokemon.name}</Typography>
                <CardMedia
                    component="img"
                    image={pokemon.sprites.front_default}
                    alt={pokemon.name}
                />
                </CardActionArea>
            </Card>
        </Grid>)}
      </Grid>
    )
}

const mapStateToProps = state => ({
    userDeck: state.deck
  });

export default connect(mapStateToProps)(UserDeckDisplay);