const axios = require("axios")
// const baseURL = "http://localhost:3001"
const baseURL = "https://pawsitivity-atack-api.herokuapp.com"

const userAPI = {

    findUserSettings: () => {
        return axios.get(`${baseURL}/api/users/finduser/`, { withCredentials: true })
    },

    findUser: () => {
        return axios.get(`${baseURL}/api/matches/byUserId/`, { withCredentials: true })
    },

    createUser: (userData) => {
        return axios.post(`${baseURL}/api/users/`, userData, { withCredentials: true })
    },

    editAll: (userData) => {
        return axios.put(`${baseURL}/api/users/updateAll/`, userData, { withCredentials: true })
    },

    getMapKey: () => {
        return axios.get(`${baseURL}/api/matches/mapAPI/`, { withCredentials: true })
    },

    deleteUser: (userData) => {
        return axios.delete(`${baseURL}/api/users/`, userData, { withCredentials: true })
    },

    login: (userData) => {
        return axios.post(`${baseURL}/api/users/login`, userData, { withCredentials: true })
    },

    logout: () => {
        return axios.get(`${baseURL}/api/users/logout`, { withCredentials: true })
    },

    getCurrentUserInfo: () => {
        return axios.get(`${baseURL}/api/users/readsessions`, { withCredentials: true })
    },

    sendEmail: (petObject) => {
        return axios.post(`${baseURL}/sendemail/`, petObject, { withCredentials: true })
    },
}
export default userAPI