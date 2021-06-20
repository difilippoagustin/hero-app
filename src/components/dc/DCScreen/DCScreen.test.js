import React from 'react' 
import '@testing-library/jest-dom' 
 
import { DCScreen } from './DCScreen' 
import { shallow } from 'enzyme' 
 
describe('<DCScreen />', () => { 
 
 	test('should display correctly', () => { 
 	 	const wrapper = shallow(<DCScreen />) 
 	 	expect(wrapper).toMatchSnapshot() 
 	}) 
 
 	})
