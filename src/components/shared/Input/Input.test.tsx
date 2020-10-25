import React from 'react';
import Input from '../Input';
import { shallow } from 'enzyme';

const InputBaseProps = {
    placeholder: "Test placeholder",
    inputType: "text",
    inputName: "test name",
    inputRef: ""
}

const InputProps = {
    ...InputBaseProps,
    defaultValue: "default"
}

describe("Rendering Input component", () => {
  it("render Input Component without crashing", () => {
    shallow(<Input {...InputProps}/>);
  })

  it("render Input Component without defaultValue prop and doesnt crash", () => {
    shallow(<Input {...InputBaseProps}/>);
  })
});