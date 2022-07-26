const ADD_CARD = 'ADD_CARD'
const REMOVE_CARD = 'REMOVE_CARD'

export function addCard(value) {
    return{
        type: ADD_CARD,
        payload: value,
    }
}

export function removeCard(value) {
    return{
        type: REMOVE_CARD,
        payload: value,
    }
}

const initialState = {
    myDeck: ['0'],
};

export default function addToDeckReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_CARD: {
            return { ...state,
            myDeck: state.myDeck.concat(action.payload)
            }
        }
        case REMOVE_CARD: {
            return { ...state,
            myDeck:
                state.myDeck.filter(card => card !== action.payload)
            }
        }
        default: 
            return state;
    }
}