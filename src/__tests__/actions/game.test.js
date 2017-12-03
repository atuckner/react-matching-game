import * as actions from '../../actions/game';

describe('selectCard', () => {
  it('should create an action to select a card', () => {
    const card = {'icon': 'flash', selected: false, matched: true}
    const expectedAction = {
      type: 'SELECT_CARD',
      card
    };

    expect(actions.selectCard(card)).toEqual(expectedAction);
  });
});

describe('addGuess', () => {
  const expectedAction = {
    type: 'ADD_GUESS'
  };

  it('should create an action to add a guess', () => {
    expect(actions.addGuess()).toEqual(expectedAction);
  });
});

describe('restartGame', () => {
  const expectedAction = {
    type: 'RESTART_GAME'
  };

  it('should create an action to restart the game', () => {
    expect(actions.restartGame()).toEqual(expectedAction);
  });
});
