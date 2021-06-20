import React from 'react' 
import '@testing-library/jest-dom' 
 
import { MarvelScreen } from './MarvelScreen' 
import { shallow } from 'enzyme' 
 
describe('<MarvelScreen />', () => { 
 
 	test('should display correctly', () => { 
 	 	const wrapper = shallow(<MarvelScreen />) 
 	 	expect(wrapper).toMatchSnapshot() 
 	}) 
 
 	})
