import React from 'react';
import ListCountriesCard from '.';
import { shallow } from 'enzyme';

const ListCountriesCardProps = {
    _id: "",
    alpha2Code: "",
    name: "",
    nativeName: "",
    flag: {
        _id: "",
        svgFile: ""
    }
};

describe("Rendering ListCountriesCard component", () => {
  it("render ListCountriesCard Component without crashing", () => {
    shallow(<ListCountriesCard {...ListCountriesCardProps} />);
  })
});