export default(state = [], action) => {
  switch (action.type) {
    case 'GET_MY_ALBUMS_FULFILLED':
      console.log("GET MY ALBUMS LOG", action.payload)
      return [action.payload.data]
    case 'ADD_TO_MY_SHELF_FULFILLED':
      console.log("ADD TO MY SHELF STATE",state)
      console.log("ADD TO MY SHELF ACTION")
      return [[...action.payload.data]]
    case 'GET_ALBUM_FULFILLED':
      return [...state, action.payload.data]
    case 'REMOVE_ALBUM_FULFILLED':
      console.log("REMOVE ALBUM LOG", action.payload)
      return [[...action.payload.data]]
    case 'EDIT_ALBUM_FULFILLED':
      console.log("EDIT ALBUM CONSOLE LOG REDUCER", action.payload)
      return [...action.payload.data]
    default:
      return state;
  }
}
