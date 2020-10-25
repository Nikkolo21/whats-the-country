import React from 'react';
import ListCountriesFooter from '.';
import { shallow } from 'enzyme';

const ListCountriesFooterProps = {
    elems: 1
}

describe("Rendering ListCountriesFooter component", () => {
  it("render ListCountriesFooter Component without crashing", () => {
    shallow(<ListCountriesFooter {...ListCountriesFooterProps} />);
  })
});