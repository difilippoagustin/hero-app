import React from 'react' 
import '@testing-library/jest-dom' 
 
import { AppRouter } from './AppRouter' 
import { shallow } from 'enzyme' 
 
describe('<AppRouter />', () => { 
 
 	test('should display correctly', () => { 
 	 	const wrapper = shallow(<AppRouter />) 
 	 	expect(wrapper).toMatchSnapshot() 
 	}) 
 
 	})
