export default(state = [], action) => {
  switch (action.type) {
    case 'GET_ARTIST_FULFILLED':
      console.log('action payload', action.payload);
      return [...action.payload.data.results]
    default:
      return state;
  }
}
