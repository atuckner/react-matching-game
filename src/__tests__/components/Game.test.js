import React from 'react';
import { shallow } from 'enzyme';

import { Game } from '../../components/Game';
import { Provider } from 'react-redux';

test('render Game', () => {
  const wrapper = shallow(
    <Game actions={{selectCard: jest.fn(), addGuess: jest.fn(), restartGame: jest.fn()}} cards={[{icon: 'flash', selected: false, matched: false}]} game={{}}/>
  );
  expect(wrapper).toMatchSnapshot();
});
