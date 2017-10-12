export default(state = 'title', action) => {
  switch (action.type) {
    case 'UPDATE_SORT':
      return action.payload
    default:
      return state;
  }
}
