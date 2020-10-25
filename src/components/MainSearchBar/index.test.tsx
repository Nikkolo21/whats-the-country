import React from 'react';
import MainSearchBar from '.';
import { shallow } from 'enzyme';

describe("Rendering MainSearchBar component", () => {
  it("render MainSearchBar Component without crashing", () => {
    shallow(<MainSearchBar />);
  })
});