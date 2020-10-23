import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SearchCountries from './views/SearchCountries';
import ListCountries from './views/ListCountries';
import './styles/tailwind.output.css';

function App() {
  return (
    <section style={{backgroundColor: 'rgba(10, 10, 10, 0.04)', minHeight: '100vh'}}>
      <Router>
        <Route exact path="/">
          <SearchCountries/>
        </Route>
        <Route path="/countries">
          <ListCountries/>
        </Route>
      </Router>
    </section>
  );
}

export default App;
