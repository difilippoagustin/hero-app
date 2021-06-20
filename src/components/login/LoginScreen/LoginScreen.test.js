import React from 'react' 
import '@testing-library/jest-dom' 
 
import { LoginScreen } from './LoginScreen' 
import { shallow } from 'enzyme' 
 
describe('<LoginScreen />', () => { 
 
 	test('should display correctly', () => { 
 	 	const wrapper = shallow(<LoginScreen />) 
 	 	expect(wrapper).toMatchSnapshot() 
 	}) 
 
 	})
