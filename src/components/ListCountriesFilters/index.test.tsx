import React from 'react';
import ListCountriesFilters from '.';
import { shallow } from 'enzyme';
import LanguageDropdown from './LanguageDropdown';
import CurrencyDropdown from './CurrencyDropdown';
import RegionDropdown from './RegionDropdown';

describe("Rendering ListCountriesFilters component", () => {
  it("render ListCountriesFilters Component without crashing", () => {
    shallow(<ListCountriesFilters />);
  })

  it("render ListCountriesFilters Component LanguageDropdown without crashing", () => {
    const wrapper = shallow(<ListCountriesFilters/>);
    const child = (<LanguageDropdown/>)
    expect(wrapper.contains(child)).toEqual(true);
  })
  

  it("render ListCountriesFilters Component CurrencyDropdown without crashing", () => {
    const wrapper = shallow(<ListCountriesFilters/>);
    const child = (<CurrencyDropdown/>)
    expect(wrapper.contains(child)).toEqual(true);
  })

  it("render ListCountriesFilters Component RegionDropdown without crashing", () => {
    const wrapper = shallow(<ListCountriesFilters/>);
    const child = (<RegionDropdown/>)
    expect(wrapper.contains(child)).toEqual(true);
  })
  
});