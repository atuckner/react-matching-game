import initialState from '../initialState';

export default(state=null, payload) => {
  switch(payload.type) {
    case 'SELECT_CARD':
      const card = state.cards[payload.card];
      const updatedCard = Object.assign({}, card, { selected: true });

      let cards = state.cards.map((item, index) => {
        if (index !== payload.card) {
          return item;
        }

        return {
          ...item,
          ...updatedCard
        };
      });

      const match = cards.filter((current, index) => {
        return current.icon === updatedCard.icon && index !== payload.card && current.selected === true && updatedCard.selected === true;
      }).length > 0;

      if (match) {
        const matchedAttributes = { selected: false, matched: true };
        const updatedAttributes = { selected: false };
        cards = state.cards.map((item) => {
          if (item.icon !== updatedCard.icon) {
            return {
              ...item,
              ...updatedAttributes
            };
          }

          return {
            ...item,
            ...matchedAttributes
          };
        });
        return { ...state, game: { guesses: state.game.guesses, matches: state.game.matches + 1 }, cards: cards };
      } else {
        const amountSelected = cards.filter((current) => {
          return current.selected === true;
        }).length;

        if (amountSelected > 2) {
          const unselect = { selected: false };
          const resetCards = cards.map((item, index) => {
            if (item.selected === true && index !== payload.card) {
              return {
                ...item,
                ...unselect
              };
            }
            return item;
          });
          return { ...state, cards: resetCards };
        }
        return { ...state, cards: cards };
      }
    case 'ADD_GUESS':
      return { ...state, game: { guesses: state.game.guesses + 1, matches: state.game.matches } };
    case 'RESTART_GAME':
      return initialState;
    default:
      return state;
  }
}
