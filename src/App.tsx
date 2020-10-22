import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SearchCountries from './views/SearchCountries';
import ListCountries from './views/ListCountries';
import './styles/tailwind.output.css';

function App() {
  return (
    <Router>
      <Route exact path="/">
        <SearchCountries/>
      </Route>
      <Route path="/countries/:search">
        <ListCountries/>
      </Route>
    </Router>
  );
}

export default App;
