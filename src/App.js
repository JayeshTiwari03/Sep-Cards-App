import React from 'react';
import './App.css';
import FirstCard from './components/cards/FirstCard';
import Home from './components/home/Home';
import Navigation from './components/nav/Navigation';

function App() {
  return (
    <div>
      <Navigation />
      <Home />
      <FirstCard />
    </div>
  );
}

export default App;
