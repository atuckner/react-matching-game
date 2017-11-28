export const addGuess = () => {
  console.log('increment guesses');
  return {
    type: 'ADD_GUESS'
  }
}

export const addMatch = () => {
  console.log('increment matches');
  return {
    type: 'ADD_MATCH'
  }
}
