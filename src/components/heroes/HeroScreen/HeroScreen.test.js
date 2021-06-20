import React from 'react' 
import '@testing-library/jest-dom' 
 
import { HeroScreen } from './HeroScreen' 
import { shallow } from 'enzyme' 
 
describe('<HeroScreen />', () => { 
 
 	test('should display correctly', () => { 
 	 	const wrapper = shallow(<HeroScreen />) 
 	 	expect(wrapper).toMatchSnapshot() 
 	}) 
 
 	})
