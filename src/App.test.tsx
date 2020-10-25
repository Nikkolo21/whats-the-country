import React from 'react';
import App from '../src/App';
import { shallow } from 'enzyme';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SearchCountries from '../src/views/SearchCountries';
import ListCountries from '../src/views/ListCountries';
import CountryDetails from '../src/views/CountryDetails';

describe("Rendering App components", () => {
  it("render App Component without crashing", () => {
    shallow(<App/>);
  })

  it("render App Component Router without crashing", () => {
    const wrapper = shallow(<App/>);
    const router = (
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
    )
    expect(wrapper.contains(router)).toEqual(true);
  })
});