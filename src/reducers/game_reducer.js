export default(state=null, payload) => {
  switch(payload.type) {
    case 'ADD_GUESS':
      return {...state, guesses: state.guesses + 1};
    case 'ADD_MATCH':
      return {...state, guesses: state.matches + 1};
    default:
      return state;
  }
}
