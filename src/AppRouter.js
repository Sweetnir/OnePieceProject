// src/AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import CharacterDetails from './CharacterDetails'; // Create this component

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/character/:id" component={CharacterDetails} />
      </Switch>
    </Router>
  );
}

export default AppRouter;
