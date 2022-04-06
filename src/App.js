import React from "react";
import Home from "./pages/Home";
import GlobalStyles from "./components/GlobalStyle";
import GameDetails from '../src/components/GameDetails'
import { Routes, Route } from 'react-router-dom'


function App() {


  return (
    <div className="App">
      <GlobalStyles />
      <Routes>
        <Route path="/gamedetails" element={<GameDetails />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
