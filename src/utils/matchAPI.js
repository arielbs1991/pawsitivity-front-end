const axios = require("axios")
// const baseURL = 'http://localhost:3001'
const baseURL = "https://pawsitivity-atack-api.herokuapp.com"

const matchAPI = {
    saveMatch: (matchData) => {
        return axios.post(`${baseURL}/api/matches/newMatch/`, matchData, { withCredentials: true })
    },

    getMapAPIKey: () => {
        return axios.get(`${baseURL}/api/matches/mapAPI/`, { withCredentials: true })
    },

    createShelterMatch: (id) => {
        return axios.put(`${baseURL}/api/animals/shelterMatch/${id}`, { withCredentials: true})
    },

    updatePetfinderMatch: (id, isLiked) => {
        return axios.put(`${baseURL}/api/matches/isLikedPetfinder/${id}`, isLiked, { withCredentials: true })
    },

    updateShelterMatch: (id, isLiked) => {
        return axios.put(`${baseURL}/api/matches/shelter/isLiked/${id}`, isLiked, { withCredentials: true })
    },

    getMatchInfo: () => {
        return axios.get(`${baseURL}/api/matches/byUserId`, { withCredentials: true })
    },

    getMatchesForUniquePet: (id) => {
        return axios.get(`${baseURL}/api/matches/shelter/animalId/${id}`, { withCredentials: true })
    },
}

export default matchAPI