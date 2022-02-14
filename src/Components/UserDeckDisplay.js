import React from 'react';
import { connect } from 'react-redux';

const UserDeckDisplay = ({ deck }) => {
    return (
        <h1>{deck}</h1>
    )
}

const mapStateToProps = state => ({
    userDeck: state.deck
  });

export default connect(mapStateToProps)(UserDeckDisplay);