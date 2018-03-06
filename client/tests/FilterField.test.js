import React, { Component } from 'react';
import { shallow } from 'enzyme';
import FilterField from '../components/FilterField'; 
import toJson from 'enzyme-to-json'

describe('subscribe component', () => {
  it('should render FilterField', () => {
    expect(toJson(shallow(<FilterField/>))).toMatchSnapshot();
  });
});