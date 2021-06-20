import React from 'react' 
import '@testing-library/jest-dom' 
 
import { App } from './App' 
import { shallow } from 'enzyme' 
 
describe('<App />', () => { 
 
 	test('should display correctly', () => { 
 	 	const wrapper = shallow(<App />) 
 	 	expect(wrapper).toMatchSnapshot() 
 	}) 
 
 	})
