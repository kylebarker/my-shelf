export default(state = [], action) => {
  switch (action.type) {
    case 'GET_ARTIST_FULFILLED':
      console.log('action payload', action.payload);
      return [...state, action.payload.data]
    case 'GET_MY_ALBUMS_FULFILLED':
      return [...state, action.payload.data]
    case 'ADD_TO_MY_SHELF_FULFILLED':
      return [...state, ...action.payload.data]
    default:
      return state;
  }
}
