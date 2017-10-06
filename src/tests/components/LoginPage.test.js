import React from 'react';
import { LoginComponent } from '../../components/LoginPage';
import { shallow } from 'enzyme';

test("should render the login page", ()=>{
  const wrapper = shallow(<LoginComponent/>)
  expect(wrapper).toMatchSnapshot();
});