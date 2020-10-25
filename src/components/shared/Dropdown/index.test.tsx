import React from 'react';
import Dropdown from '.';
import { shallow } from 'enzyme';

const DropdownBaseProps = {
    onChangeFn: () => {},
    selectedValue: "",
    data: [],
    value: ""
}

const DropdownProps = {
    ...DropdownBaseProps,
    title: "",
    loading: false
}

describe("Rendering Dropdown component", () => {
    it("render Dropdown Component without crashing", () => {
      shallow(<Dropdown {...DropdownProps}/>);
    })
  
    it("render Dropdown Component without title prop and doesnt crash", () => {
      shallow(<Dropdown {...DropdownBaseProps}/>);
    })

    it("render Dropdown Component without loading prop and doesnt crash", () => {
      shallow(<Dropdown {...DropdownBaseProps}/>);
    })

    it("render Dropdown Component with selectedValue prop as number or string Type and doesnt crash", () => {
      shallow(<Dropdown {...DropdownBaseProps} selectedValue=""/>);
      shallow(<Dropdown {...DropdownBaseProps} selectedValue={3}/>);
    })

    it("render Dropdown Component with data prop as array or undefined and doesnt crash", () => {
      shallow(<Dropdown {...DropdownBaseProps} data={[]}/>);
      shallow(<Dropdown {...DropdownBaseProps} data={undefined}/>);
    })
});