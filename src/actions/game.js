export const selectCard = (card) => {
  return {
    type: 'SELECT_CARD',
    card
  }
}

export const resetSelectedCards = () => {
  return {
    type: 'RESET_SELECTED_CARDS'
  }
}

export const addGuess = () => {
  return {
    type: 'ADD_GUESS'
  }
}
