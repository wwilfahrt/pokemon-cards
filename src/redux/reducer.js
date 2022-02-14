import { createSlice } from '@reduxjs/toolkit';

const initialState = { deck: []};

const addToDeckReducer = createSlice({
    name: "deck",
    initialState,
    reducers: {
        addToDeck: (state, action) => {
            state.deck = [...state.deck, action.payload];
            console.log(action.payload);
        },
    },
});

export const { addToDeck } = addToDeckReducer.actions;
export const reducer = addToDeckReducer.reducer;