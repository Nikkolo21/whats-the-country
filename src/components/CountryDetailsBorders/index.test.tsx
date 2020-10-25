import React from 'react';
import CountryDetailsBorders from '.';
import { shallow } from 'enzyme';

const CountryDetailsBordersProps = {
    title: "",
    elements: []
}

describe("Rendering CountryDetailsBorders component", () => {
  it("render CountryDetailsBorders Component without crashing", () => {
    shallow(<CountryDetailsBorders {...CountryDetailsBordersProps}/>);
  })

  it("render CountryDetailsBorder Component with elements prop as array or undefined and doesnt crash", () => {
    shallow(<CountryDetailsBorders {...CountryDetailsBordersProps} elements={[]}/>);
    shallow(<CountryDetailsBorders {...CountryDetailsBordersProps} elements={undefined}/>);
  })
});