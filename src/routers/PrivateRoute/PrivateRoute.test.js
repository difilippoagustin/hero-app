import React from 'react' 
import '@testing-library/jest-dom' 
 
import { PrivateRoute } from './PrivateRoute' 
import { shallow } from 'enzyme' 
 
describe('<PrivateRoute />', () => { 
 
 	test('should display correctly', () => { 
 	 	const wrapper = shallow(<PrivateRoute />) 
 	 	expect(wrapper).toMatchSnapshot() 
 	}) 
 
 	})
