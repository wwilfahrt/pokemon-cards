import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { Grid, Box, Button, Card, CardMedia, Typography, CardActionArea } from '@mui/material';
import SingleCardModal from './SingleCardModal';
import DoNotDisturbOnTwoToneIcon from '@mui/icons-material/DoNotDisturbOnTwoTone';
import { removeCard } from '../redux/myDeckSlice';

const UserDeckDisplay = (props) => {
    const myDeck = props.myDeck;
    const dispatch = useDispatch();
    const [deckInfo, setDeckInfo] = useState([]);
    const [clickedCard, setClickedCard] = useState({});
    const url = 'https://pokeapi.co/api/v2/pokemon/';
    const [showModal, setShowModal] = useState(false);

    async function getDeckInfo() {
        const promises = [];
        const myDeckConverted = [];

        myDeck.forEach(str => {
            myDeckConverted.push(Number(str));
        });

    for (let i = 1; i < myDeckConverted.length; i++) {
      const result = axios.get(url + myDeckConverted[i]);
      promises.push(result)
    }
    const results = await Promise.all(promises);
    const actualData = results.map((result) => result.data);
    setDeckInfo(actualData);
    }

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

    const remove = (event) => {
        dispatch(removeCard(event.target.value));
    };

    useEffect(() => {
        getDeckInfo();
    }, [myDeck])

    return (
        <Grid container spacing={4}
            direction="row"
            justifyContent="space=evenly"
            alignItems="center"
        >
            {deckInfo.map(pokemon =>
            <Grid 
                item 
                xs={6} sm={3} md={2} 
                key={pokemon.id}
            >
            <Card variant="outlined" sx={{ borderRadius: '16px' }} >
                <CardActionArea 
                    onClick={() => {
                        modalHandler(pokemon.id)
                    }}>
                <Typography variant="h6" textAlign="center" padding="10px" >{pokemon.name}</Typography>
                <CardMedia
                    component="img"
                    image={pokemon.sprites.front_default}
                    alt={pokemon.name}
                />
                {clickedCard[pokemon.id] && <SingleCardModal show={showModal} handleClose={closeModal} pokemonId={pokemon.id} pokemon={pokemon} />}
            </CardActionArea>
            <Box textAlign="center">
            <Button size="medium" startIcon={<DoNotDisturbOnTwoToneIcon />} id={pokemon.id} value={pokemon.id} onClick={(event) => remove(event)}>Delete from deck</Button>
            </Box>
            </Card>
        </Grid>)}
      </Grid>
    )
}

const mapStateToProps = (state) => {
    return { myDeck: state.myDeck };
  };

export default connect(mapStateToProps)(UserDeckDisplay);