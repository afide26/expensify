import React from 'react';
import LoadingPage from '../../components/LoadingPage';
import { shallow } from 'enzyme';

test("should match LoadingPage snapshot", ()=>{
  const wrapper = shallow(<LoadingPage/>)
  expect(wrapper).toMatchSnapshot();
});