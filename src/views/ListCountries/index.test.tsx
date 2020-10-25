import React from 'react';
import ListCountries from '.';
import { shallow } from 'enzyme';

describe("Rendering ListCountries view component", () => {
  it("render ListCountries Component without crashing", () => {
    shallow(<ListCountries />);
  })
});