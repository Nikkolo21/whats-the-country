import React from 'react';
import Button from '.';
import { shallow } from 'enzyme';

const ButtonProps = {
  title: "Testing"
}

describe("Rendering Button component", () => {
  it("render Button Component without crashing", () => {
    shallow(<Button {...ButtonProps}/>);
  })

  it("expect that Button component receive the right title", () => {
    const button = shallow(<Button {...ButtonProps}/>);
    const buttonTitle = button.text();
    expect(buttonTitle).toEqual(ButtonProps.title);
  })
});