import reducer from '../../reducers/game_reducer';
import generateCards from '../../utils/generateCards';

describe('game reducer', () => {
  describe('SELECT_CARD', () => {
    it('selects the provided card', () => {
      const state = {
        cards: [{icon: 'flash', selected: false, matched: false}, {icon: 'leaf', selected: false, matched: false}],
        game: {guesses: 10, matches: 5}
      };
      const card = 0;

      expect(reducer(state, {type: 'SELECT_CARD', card}).cards).toEqual([{icon: 'flash', selected: true, matched: false}, {icon: 'leaf', selected: false, matched: false}])
    });

    it('unselects and matches two selected cards with the same icon', () => {
      const state = {
        cards: [{icon: 'flash', selected: true, matched: false}, {icon: 'flash', selected: true, matched: false}],
        game: {guesses: 1, matches: 0}
      };
      const card = 0;

      expect(reducer(state, {type: 'SELECT_CARD', card}).cards).toEqual([{icon: 'flash', selected: false, matched: true}, {icon: 'flash', selected: false, matched: true}])
    });

    it('increments matches when a match is found', () => {
      const state = {
        cards: [{icon: 'flash', selected: true, matched: false}, {icon: 'flash', selected: true, matched: false}],
        game: {guesses: 2, matches: 0}
      };
      const card = 0;

      expect(reducer(state, {type: 'SELECT_CARD', card}).game.matches).toEqual(1)
    });

    it('unselects selected cards if a match is not found in previous guess', () => {
      const state = {
        cards: [{icon: 'anchor', selected: true, matched: false}, {icon: 'leaf', selected: true, matched: false}, {icon: 'tree', selected: true, matched: false}],
        game: {guesses: 1, matches: 0}
      };
      const card = 2;

      expect(reducer(state, {type: 'SELECT_CARD', card}).cards).toEqual([{icon: 'anchor', selected: false, matched: false}, {icon: 'leaf', selected: false, matched: false}, {icon: 'tree', selected: true, matched: false}])
    });
  });

  describe('ADD_GUESS', () => {
    it('should increment guesses by 1', () => {
      const state = {
        cards: generateCards(),
        game: {guesses: 10, matches: 5}
      };

      expect(reducer(state, {type: 'ADD_GUESS'}).game.guesses).toEqual(11)
    });
  });

  describe('RESTART_GAME', () => {
    it('should reset guesses to 0', () => {
      const state = {
        cards: generateCards(),
        game: {guesses: 10, matches: 5}
      };

      expect(reducer(state, {type: 'RESTART_GAME'}).game.guesses).toEqual(0)
    });

    it('should reset matches to 0', () => {
      const state = {
        cards: generateCards(),
        game: {guesses: 10, matches: 5}
      };

      expect(reducer(state, {type: 'RESTART_GAME'}).game.matches).toEqual(0)
    });

    it('should randomize a new set of cards', () => {
      const state = {
        cards: generateCards(),
        game: {guesses: 10, matches: 5}
      };

      expect(reducer(state, {type: 'RESTART_GAME'}).cards).not.toEqual(state.cards)
    });
  });
});
