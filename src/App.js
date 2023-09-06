// src/App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CharacterList from './CharacterList';
import CharacterDetails from './CharacterDetails';

function App() {
  const characters = [
    { id: 1, name: 'Monkey D. Luffy', abilities: 'Gomu Gomu no Mi, Haki', bounty: '1,500,000,000', image: 'luffy.jpg' },
    // Add more character data here
  ];

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route exact path="/" render={(props) => <CharacterList {...props} characters={characters} />} />
            <Route path="/character/:id" render={(props) => <CharacterDetails {...props} characters={characters} />} />
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
