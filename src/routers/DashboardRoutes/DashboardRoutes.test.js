import React from 'react' 
import '@testing-library/jest-dom' 
 
import { DashboardRoutes } from './DashboardRoutes' 
import { shallow } from 'enzyme' 
 
describe('<DashboardRoutes />', () => { 
 
 	test('should display correctly', () => { 
 	 	const wrapper = shallow(<DashboardRoutes />) 
 	 	expect(wrapper).toMatchSnapshot() 
 	}) 
 
 	})
