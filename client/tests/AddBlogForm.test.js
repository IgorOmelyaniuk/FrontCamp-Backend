import React, { Component } from 'react';
import { shallow } from 'enzyme';
import AddBlogForm from '../containers/AddBlogForm'; 
import toJson from 'enzyme-to-json'

describe('subscribe component', () => {
  it('should render AddBlogForm', () => {
    expect(toJson(shallow(<AddBlogForm/>))).toMatchSnapshot();
  });
});