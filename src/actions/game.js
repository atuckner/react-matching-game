export const selectCard = (card) => {
  return {
    type: 'SELECT_CARD',
    card
  }
}

export const addGuess = () => {
  return {
    type: 'ADD_GUESS'
  }
}

export const restartGame = () => {
  return {
    type: 'RESTART_GAME'
  }
}
