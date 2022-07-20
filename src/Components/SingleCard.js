import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Card, Button } from 'react-bootstrap';
import SingleCardModal from './SingleCardModal';
import { addCard, removeCard } from '../redux/myDeckSlice';
import './SingleCard.css';

const SingleCard = (props) => {
    const pokemon = props.pokemon
    const dispatch = useDispatch();
    const [buttonText, setButtonText] = useState('Add to your Deck')
    const [showModal, setShowModal] = useState(false);

    const closeModal = () => {
        setShowModal(false);
    }

    const modalHandler = () => {
        setShowModal(true);
    }

    const add = (event) => {
        if (buttonText === "Add to your Deck") {
        setButtonText('Remove from your Deck')
        dispatch(addCard(event.target.value));
        } else {
        setButtonText('Add to your Deck')
        dispatch(removeCard(event.target.value));
        }
    };

    return (
        <Card key={pokemon.id} border="dark"  >
            <Card.Header>
                <Card.Text className='pokemonname' >{pokemon.name}</Card.Text>
            </Card.Header>
            <Card.Body onClick={() => {modalHandler(pokemon.id)}}>
                <Card.Img variant="top"
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                />
            {showModal && <SingleCardModal show={showModal} onHide={closeModal} pokemonId={pokemon.id} pokemon={pokemon} />}
            </Card.Body>
            <Button id={pokemon.id} value={pokemon.id} onClick={(event) => add(event)}>{buttonText}</Button>
            </Card>
)
}

export default SingleCard;