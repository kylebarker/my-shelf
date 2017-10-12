import axios from 'axios';
const key = "kTczaQNQsMCMiYrKZJRh"
const secret = "FULBqaLExejZoAZxyCLwCVTBSIzVIWLt"

export const getMoreAlbumInfo = (id) => {
  return {
    type: 'GET_MORE_INFO',
    payload: axios({
      method: "GET",
      url: `https://api.discogs.com/masters/${id}`,
      headers: {"Authorization": `Discogs key=${key}, secret=${secret}`}
     })
  }
}
