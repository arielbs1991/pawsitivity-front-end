import axios from "axios"
const baseURL = 'https://pawsitivity-atack-api.herokuapp.com'


const petAPI = {

  petSearch: () => {
    return axios.get(`${baseURL}/api/petAPI/pets/`, {
      withCredentials: true,
    });
  },

  byId: (petId) => {
    return axios.get(`${baseURL}/api/petAPI/pets/${petId}`, {
      withCredentials: true,
    })
  },
}

export default petAPI;