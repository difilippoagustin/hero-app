import React from 'react' 
import '@testing-library/jest-dom' 
 
import { HeroList } from './HeroList' 
import { shallow } from 'enzyme' 
 
describe('<HeroList />', () => { 
 
 	test('should display correctly', () => { 
 	 	const wrapper = shallow(<HeroList />) 
 	 	expect(wrapper).toMatchSnapshot() 
 	}) 
 
 	})
