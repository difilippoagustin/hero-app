import React from 'react' 
import '@testing-library/jest-dom' 
 
import { PublicRoute } from './PublicRoute' 
import { shallow } from 'enzyme' 
 
describe('<PublicRoute />', () => { 
 
 	test('should display correctly', () => { 
 	 	const wrapper = shallow(<PublicRoute />) 
 	 	expect(wrapper).toMatchSnapshot() 
 	}) 
 
 	})
