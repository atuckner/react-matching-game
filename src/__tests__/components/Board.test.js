import React from 'react';
import { shallow } from 'enzyme';

import Board from '../../components/Board';

test('render the Board', () => {
  const cards = [{icon: "camera-retro", selected: false, matched: false},{icon: "flash", selected: false, matched: false},
    {icon: "flash", selected: false, matched: false},{icon: "sun-o", selected: false, matched: false},{icon: "key", selected: false, matched: false},
    {icon: "globe", selected: false, matched: false},{icon: "tree", selected: false, matched: false},{icon: "camera-retro", selected: false, matched: false},
    {icon: "anchor", selected: false, matched: false},{icon: "key", selected: false, matched: false},{icon: "leaf", selected: false, matched: false},
    {icon: "sun-o", selected: false, matched: false},{icon: "leaf", selected: false, matched: false},{icon: "anchor", selected: false, matched: false},
    {icon: "tree", selected: false, matched: false},{icon: "globe", selected: false, matched: false}]
  const wrapper = shallow(
    <Board cards={cards} game={{guesses: 0, matches: 0}}/>
  );
  expect(wrapper).toMatchSnapshot();
});
