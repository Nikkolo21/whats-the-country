import React from 'react';
import CountryDetailsElement from '.';
import { shallow } from 'enzyme';

const CountryDetailsElementProps = {
    title: "",
    element: ""
}

describe("Rendering CountryDetailsElement component", () => {
  it("render CountryDetailsElement Component without crashing", () => {
    shallow(<CountryDetailsElement {...CountryDetailsElementProps} />);
  })

  it("render CountryDetailsElement Component with element prop as string or undefined and doesnt crash", () => {
    shallow(<CountryDetailsElement {...CountryDetailsElementProps} element=""/>);
    shallow(<CountryDetailsElement {...CountryDetailsElementProps} element={undefined}/>);
  })
});