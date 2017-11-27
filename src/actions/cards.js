export const selectCard = (card) => {
  console.log('selecting card: ', card);
  return {
    type: 'SELECT_CARD',
    card
  }
}

export const matchCard = (card) => {
  console.log('matching card: ', card);
  return {
    type: 'MATCH_CARD',
    card
  }
}

export const resetSelectedCards = () => {
  console.log('resetting selected cards')
  return {
    type: 'RESET_SELECTED_CARDS'
  }
}
