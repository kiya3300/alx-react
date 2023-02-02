import React from 'react';
import { shallow } from 'enzyme';
import BodySection from './BodySection';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';

const wrapper = shallow(<BodySectionWithMarginBottom title="this is a test"/>)
describe('BodySectionWithMarginBottom', () => {
  it('renders correctly', () => {
    expect(wrapper.containsMatchingElement(<BodySection/>)).toEqual(true)
  })
})
