import axios from 'axios';
const key = "kTczaQNQsMCMiYrKZJRh"
const secret = "FULBqaLExejZoAZxyCLwCVTBSIzVIWLt"

export const getArtist = (artist) => {
  console.log('artist in actions', artist.artist);
  return {
    type: 'GET_ARTIST',
    payload: axios({
      method: "GET",
      url: `https://api.discogs.com/database/search?q=${artist.artist}&type=master&format=album`,
      headers: {"Authorization": `Discogs key=${key}, secret=${secret}`}
     })
  }
}
export const getMyAlbums = () => {
  return {
    type: 'GET_MY_ALBUMS',
    payload: axios.get(`http://localhost:8000/myShelf`)
  }
}

export const addToMyShelf = (album) => {
  return {
    type: 'ADD_TO_MY_SHELF',
    payload: axios.post(`http://localhost:8000/myShelf`, album)
  }
}

export const getAlbum = (id) => {
  return {
    type: 'GET_ALBUM',
    payload: axios.get(`http://localhost:8000/myShelf/${id}`)
  }
}

export const removeAlbum = (id) => {
  return {
    type: 'REMOVE_ALBUM',
    payload: axios.delete(`http://localhost:8000/myShelf/${id}`)
  }
}

export const editAlbum = (id) => {
  return {
    type: 'EDIT_ALBUM',
    payload: axios.patch(`http://localhost:8000/myShelf/${id}/edit`)
  }
}
