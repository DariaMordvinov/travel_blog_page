import React from 'react';
import './App.css';
import data from './data.js';
import Navbar from './components/Navbar';
import Card from './components/Card';

function App() {
  // Returns 2 fragments: navbar and "cards" div. 
  // In 'cards' div renders <Card /> component for each element in the "data" array
  return (
    <React.Fragment>
      <Navbar />
      <div className="cards">
        {data.map(card =>
          <Card
            key={card.title}
            {...card}
          />)}
      </div>
    </React.Fragment>
  );
}

export default App;
