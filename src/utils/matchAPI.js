const axios = require("axios")
// const baseURL = 'http://localhost:3001'
const baseURL = "https://pawsitivity-atack-api.herokuapp.com"


const matchAPI = {
    saveMatch: (matchData) => {
        return axios.post(`${baseURL}/api/matches/newMatch/`, matchData, { withCredentials: true })
    },

    // getMatchbyId: (petfinderId) => {
    //     return axios.get(`${baseURL}/api/matches/petfinderId/${petfinderId}`)
    // },

    // getMatchesbyId: (userId) => {
    //     return axios.get(`${baseURL}/api/matches/userId/${userId}`)
    // },

    updateMatch: (id, isLiked) => {
        return axios.put(`${baseURL}/api/matches/isLiked/${id}`, isLiked, { withCredentials: true })
    },

    // NEW
    // getMatchInfo: (id) => {
    //     return axios.get(`${baseURL}/api/matches/${id}`, { withCredentials: true })
    // },

    // OLD -----------------------------
    getMatchInfo: (id) => {
        return axios.get(`${baseURL}/api/users/finduser/${id}`, { withCredentials: true })
    },
}

export default matchAPI