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
