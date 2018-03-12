import React, { Component } from 'react';
import { shallow } from 'enzyme';
import FilterField from '../components/FilterField'; 
import { expect } from 'chai';

describe('subscribe component', () => {
  it('should have input field', () => {
    const wrapper = shallow(<FilterField />);
    expect(wrapper.find('input')).to.have.length(1);
  });
});