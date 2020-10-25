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
});