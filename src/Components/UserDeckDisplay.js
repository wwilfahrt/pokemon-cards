import React from 'react';
import { connect } from 'react-redux';

const UserDeckDisplay = ({ userDeck }) => {
    return (
        <h1>{userDeck}</h1>
    )
}

const mapStateToProps = state => ({
    userDeck: state.deck
  });

export default connect(mapStateToProps)(UserDeckDisplay);