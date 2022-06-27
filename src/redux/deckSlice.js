import { createSlice } from '@reduxjs/toolkit';

const initialState = { deck: []};

const deckSlice = createSlice({
    name: "deck",
    initialState,
    reducers: {
        addToDeck: (state, action) => {
            state.deck = [...state.deck, action.payload];
            console.log(action.payload);
        },
    },
});

export const { addToDeck } = deckSlice.actions;
export const reducer = deckSlice.reducer;