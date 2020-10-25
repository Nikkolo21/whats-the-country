import React from 'react';
import RegionDropdown from '.';
import { shallow } from 'enzyme';

describe("Rendering RegionDropdown component", () => {
  it("render RegionDropdown Component without crashing", () => {
    shallow(<RegionDropdown />);
  })
});