import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { Routes, Route } from 'react-router-dom';
import PokemonCardsContainer from './Components/PokemonCardsContainer';
import UserDeckDisplay from './Components/UserDeckDisplay';

function App() {
  return (
    
    <div>
            <Navbar />
            <div className="content">
            <Routes>
                <Route exact path="/" element={<PokemonCardsContainer />}></Route>
                <Route exact path="/mydeck" element={<UserDeckDisplay />}></Route>
            </Routes>
            </div>
        </div>
  )
}

export default App;
