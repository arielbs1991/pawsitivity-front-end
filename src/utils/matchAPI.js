const axios = require("axios")
const baseURL = "http://localhost:3001"


const matchAPI = {
    saveMatch: (matchData) => {
        return axios.post(`${baseURL}/api/matches/newMatch/`, matchData, { withCredentials: true })
    },

    getMatchbyId: (userId) => {
        return axios.get(`${baseURL}/api/matches/${userId}`)
    },

    updateMatch: (id, isLiked) => {
        return axios.put(`${baseURL}/api/matches/isLiked/${id}`, isLiked, { withCredentials: true })
    }
}

export default matchAPI