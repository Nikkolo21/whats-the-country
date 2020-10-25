import React from 'react';
import CountryDetails from '.';
import { shallow } from 'enzyme';

describe("Rendering CountryDetails view component", () => {
  it("render CountryDetails Component without crashing", () => {
    shallow(<CountryDetails />);
  })
});