import React from 'react';
import SearchSection from '.';
import { shallow } from 'enzyme';

describe("Rendering SearchSection view component", () => {
  it("render SearchSection Component without crashing", () => {
    shallow(<SearchSection />);
  })
});