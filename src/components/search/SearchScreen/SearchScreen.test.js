import React from 'react' 
import '@testing-library/jest-dom' 
 
import { SearchScreen } from './SearchScreen' 
import { shallow } from 'enzyme' 
 
describe('<SearchScreen />', () => { 
 
 	test('should display correctly', () => { 
 	 	const wrapper = shallow(<SearchScreen />) 
 	 	expect(wrapper).toMatchSnapshot() 
 	}) 
 
 	})
