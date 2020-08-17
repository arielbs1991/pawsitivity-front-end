const axios = require("axios")
const baseURL = "http://localhost:3001"


const shelterAPI = {

    searchShelter: (userId) => {
        return axios.get(`${baseURL}/api/shelter/${userId}`)
    },

    saveShelter: (shelterData) => {
        return axios.post(`${baseURL}/api/shelter/`, shelterData, { withCredentials: true })
    },

}

export default shelterAPI