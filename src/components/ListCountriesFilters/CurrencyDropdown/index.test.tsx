import React from 'react';
import CurrencyDropdown from '.';
import { shallow } from 'enzyme';

describe("Rendering CurrencyDropdown component", () => {
  it("render CurrencyDropdown Component without crashing", () => {
    shallow(<CurrencyDropdown />);
  })
});