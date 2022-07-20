import React from 'react';
import './SingleCardModal.css';
import { Button, Modal } from 'react-bootstrap';

const SingleCardModal = (props) => {
    /* const showHideClassName = props.show ? "modal display-block" : "modal display-none"; */

    const pokemon = props.pokemon;

    return (
            <Modal>
            <Modal.Header />
            <Modal.Body>
                <p>{pokemon.name}</p>
                <p>Height: {pokemon.height}cm</p>
                <p>{pokemon.types.name}</p>
                <img
                    src={pokemon.sprites.front_default}
                    alt={pokemon.name}
                />
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.handleClose}>
                  Close
                </Button>
            </Modal.Footer>
            </Modal>
    )
}
export default SingleCardModal;