import React from 'react' 
import '@testing-library/jest-dom' 
 
import { Navbar } from './Navbar' 
import { shallow } from 'enzyme' 
 
describe('<Navbar />', () => { 
 
 	test('should display correctly', () => { 
 	 	const wrapper = shallow(<Navbar />) 
 	 	expect(wrapper).toMatchSnapshot() 
 	}) 
 
 	})
