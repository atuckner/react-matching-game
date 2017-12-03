import generateCards from './utils/generateCards';

const initialState = {
  cards: generateCards(),
  game: {guesses: 0, matches: 0}
};

export default initialState;
