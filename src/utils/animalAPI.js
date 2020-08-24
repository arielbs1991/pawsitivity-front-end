const axios = require("axios")
// const baseURL = "http://localhost:3001"
const baseURL = "https://pawsitivity-atack-api.herokuapp.com"

const animalAPI = {

    findAnimals: () => {
        return axios.get(`${baseURL}/api/animals/search/`, { withCredentials: true })
    },

    createAnimal: (animalObj) => {
        return axios.post(`${baseURL}/api/animals/animal/`, animalObj, { withCredentials: true })
    },

    deleteAnimal: (id) => {
        return axios.delete(`${baseURL}/api/animals/delete/${id}`, { withCredentials: true })
    },

    updateAnimal: (id, animalObj) => {
        return axios.put(`${baseURL}/api/animals/animal/${id}`, animalObj, { withCredentials: true })
    },

    findAllShelterAnimals: () => {
        return axios.get(`${baseURL}/api/animals/all/`, { withCredentials: true })
    },
    
    findOneShelterAnimal: (id) => {
        return axios.get(`${baseURL}/api/animals/shelterAnimal/${id}`, { withCredentials: true })
    },

}
export default animalAPI