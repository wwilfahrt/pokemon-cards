import React from 'react';
import './SingleCardModal.css';
import { Modal, Button, Card, CardMedia, Typography } from '@mui/material';

const SingleCardModal = (props) => {
    const showHideClassName = props.show ? "modal display-block" : "modal display-none";

    const pokemon = props.pokemon;

    return (
        <div className={showHideClassName}>
            <Modal 
            open={props.show}>
                <Card className="modal" >
                <Button type="button" sx={{ backgroundColor: 'white' }} onClick={props.handleClose}>
                  Close
                </Button>
                <Typography>{pokemon.name}</Typography>
                <Typography>Height: {pokemon.height}cm</Typography>
                <Typography>{pokemon.types.name}</Typography>
                <CardMedia
                    component="img"
                    image={pokemon.sprites.front_default}
                    alt={pokemon.name}
                />
                </Card>
            </Modal>
        </div>
    )
}
export default SingleCardModal;