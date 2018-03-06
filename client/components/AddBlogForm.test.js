import React, { Component } from 'react';
import { shallow } from 'enzyme';
import AddBlogForm from './AddBlogForm'; 
import toJson from 'enzyme-to-json'

describe('subscribe component', () => {
  it('should AddBlogForm component', () => {
    expect(toJson(shallow(<AddBlogForm/>))).toMatchSnapshot();
  });
});