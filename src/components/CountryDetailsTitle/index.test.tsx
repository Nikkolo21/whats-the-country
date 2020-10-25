import React from 'react';
import CountryDetailsTitle from '.';
import { shallow } from 'enzyme';

describe("Rendering CountryDetailsTitle component", () => {
  it("render CountryDetailsTitle Component without crashing", () => {
    shallow(<CountryDetailsTitle title=""/>);
  })

  it("render CountryDetailsTitleComponent with title prop as string or undefined and doesnt crash", () => {
    shallow(<CountryDetailsTitle title=""/>);
    shallow(<CountryDetailsTitle title={undefined}/>);
  })
});