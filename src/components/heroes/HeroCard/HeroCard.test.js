import React from 'react' 
import '@testing-library/jest-dom' 
 
import { HeroCard } from './HeroCard' 
import { shallow } from 'enzyme' 
 
describe('<HeroCard />', () => { 
 
 	test('should display correctly', () => { 
 	 	const wrapper = shallow(<HeroCard />) 
 	 	expect(wrapper).toMatchSnapshot() 
 	}) 
 
 	})
