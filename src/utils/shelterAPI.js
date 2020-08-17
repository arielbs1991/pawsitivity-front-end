const axios = require("axios")
// const baseURL = "http://localhost:3001"
const baseURL = "https://pawsitivity-atack-api.herokuapp.com"


const shelterAPI = {

    searchShelter: (userId) => {
        return axios.get(`${baseURL}/api/shelter/${userId}`)
    },

    saveShelter: (shelterData) => {
        return axios.post(`${baseURL}/api/shelter/`, shelterData, { withCredentials: true })
    },

}

export default shelterAPI