import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SearchCountries from './views/SearchCountries';
import ListCountries from './views/ListCountries';
import './styles/tailwind.output.css';
import CountryDetails from './views/CountryDetails';

function App() {
  return (
    <section style={{backgroundColor: 'rgba(10, 10, 10, 0.03)', minHeight: '100vh'}}>
      <Router>
        <Route exact path="/">
          <SearchCountries/>
        </Route>
        <Route exact path="/countries">
          <ListCountries/>
        </Route>
        <Route path="/countries/:alpha">
          <CountryDetails/>
        </Route>
      </Router>
    </section>
  );
}

export default App;
