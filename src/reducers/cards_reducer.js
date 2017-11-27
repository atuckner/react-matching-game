export default(state=null, payload) => {
  switch(payload.type) {
    case 'SELECT_CARD':
      const card = state[payload.card]
      const updatedCard = Object.assign({}, card, {selected: true})

      return state.map((item, index) => {
        if (index !== payload.card) {
          return item;
        }

        return {
          ...item,
          ...updatedCard
        }
      })
    default:
      return state;
  }
}
