import React from 'react';
import CountryDetailsList from '.';
import { shallow } from 'enzyme';

const CountryDetailsListProps = {
    title: "",
    elements: []
} 

describe("Rendering CountryDetailsList component", () => {
  it("render CountryDetailsList Component without crashing", () => {
    shallow(<CountryDetailsList {...CountryDetailsListProps}/>);
  })

  it("render CountryDetailsList Component with elements prop as array or undefined and doesnt crash", () => {
    shallow(<CountryDetailsList {...CountryDetailsListProps} elements={[]}/>);
    shallow(<CountryDetailsList {...CountryDetailsListProps} elements={undefined}/>);
  })
});