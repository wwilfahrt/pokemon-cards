import { configureStore } from '@reduxjs/toolkit';
import { addToDeck } from './deckSlice';

const store = configureStore({
    reducer: addToDeck,
});

export default store;