import React from 'react';
import './App.css';
import ListCountries from './views/ListCountries';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Route path="/">
        <ListCountries/>
      </Route>
    </Router>
  );
}

export default App;
