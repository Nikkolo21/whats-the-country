import React from 'react';
import LanguageDropdown from '.';
import { shallow } from 'enzyme';

describe("Rendering LanguageDropdown component", () => {
  it("render LanguageDropdown Component without crashing", () => {
    shallow(<LanguageDropdown />);
  })
});