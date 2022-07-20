import { configureStore } from '@reduxjs/toolkit';
import addToDeckReducer from './myDeckSlice';

const store = configureStore({
    reducer: addToDeckReducer,
});

export default store;