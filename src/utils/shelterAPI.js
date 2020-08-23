const axios = require("axios")
const baseURL = "http://localhost:3001"
// const baseURL = "https://pawsitivity-atack-api.herokuapp.com"


const shelterAPI = {

    // searchShelter: (userId) => {
    //     return axios.get(`${baseURL}/api/shelter/${userId}`)
    // },

    // saveShelter: (shelterData) => {
    //     return axios.post(`${baseURL}/api/shelter/`, shelterData, { withCredentials: true })
    // },

    getShelterData: () => {
        return axios.get(`${baseURL}/api/shelterAPI/AnimalShelter/`, { withCredentials: true })
    },

    addShelter: (shelterData) => {
        return axios.post(`${baseURL}/api/shelterAPI/AnimalShelter/`, shelterData, { withCredentials: true })
    },

    shelterUpdateAll: (shelterData) => {
        return axios.put(`${baseURL}/api/shelterAPI/updateAll/`, shelterData, { withCredentials: true })
    },

    shelterLogin: (shelterData) => {
        return axios.post(`${baseURL}/api/shelterAPI/login`, shelterData, { withCredentials: true })
    },

    shelterLogout: () => {
        return axios.get(`${baseURL}/api/shelterAPI/logout`, { withCredentials: true })
    },

    getCurrentShelterInfo: () => {
        return axios.get(`${baseURL}/api/shelterAPI/readsessions`, { withCredentials: true })
    },

    deleteShelter: (shelterData) => {
        return axios.delete(`${baseURL}/api/shelterAPI/`, shelterData, { withCredentials: true })
    },
}

export default shelterAPI