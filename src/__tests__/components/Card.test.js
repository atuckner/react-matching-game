import React from 'react';
import { shallow } from 'enzyme';
import Card from '../../components/Card';

test('render a Card', () => {
  const wrapper = shallow(
    <Card icon='flash' selected='false' matched='false'/>
  );
  expect(wrapper).toMatchSnapshot();
});
