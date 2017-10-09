import React from 'react';
import { Header } from '../../components/Header';
import { shallow } from 'enzyme';


let startLogin, startLogout, wrapper;
beforeEach(()=>{
  startLogout = jest.fn()
  wrapper = shallow(<Header 
                      startLogout={startLogout} 
                      startLogin={startLogin} />)
});


test('should render the Header correctly', ()=>{
  expect(wrapper).toMatchSnapshot();
});

test("should call startLogout on button click", ()=>{
  wrapper.find('button').simulate('click');
  expect(startLogout).toHaveBeenCalled();
});

