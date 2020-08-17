const axios = require("axios")
// const baseURL = "http://localhost:3001"
const baseURL = "https://pawsitivity-atack-api.herokuapp.com"


const userAPI = {
    createUser: (userData) => {
        return axios.post(`${baseURL}/api/users/`, userData, { withCredentials: true })
    },

    editUserName: (id, userName) => {
        return axios.put(`${baseURL}/api/users/userName/${id}`, userName, { withCredentials: true })
    },

    editUserCity: (id, userCity) => {
        return axios.put(`${baseURL}/api/users/city/${id}`, userCity, { withCredentials: true })
    },

    editUserState: (id, userState) => {
        return axios.put(`${baseURL}/api/users/state/${id}`, userState, { withCredentials: true })
    },

    editUserPostcode: (id, postCode) => {
        return axios.put(`${baseURL}/api/users/postcode/${id}`, postCode, { withCredentials: true })
    },

    editUserPhoneNumber: (id, phoneNumber) => {
        return axios.put(`${baseURL}/api/users/phoneNumber/${id}`, phoneNumber, { withCredentials: true })
    },

    editUserHasKids: (id, hasKids) => {
        return axios.put(`${baseURL}/api/users/hasKids/${id}`, hasKids, { withCredentials: true })
    },

    editUserHasDogs: (id, hasDogs) => {
        return axios.put(`${baseURL}/api/users/hasDogs/${id}`, hasDogs, { withCredentials: true })
    },

    editUserHasCats: (id, hasCats) => {
        return axios.put(`${baseURL}/api/users/hasCats/${id}`, hasCats, { withCredentials: true })
    },

    editUserWhichSpecies: (id, whichSpecies) => {
        return axios.put(`${baseURL}/api/users/whichSpecies/${id}`, whichSpecies, { withCredentials: true })
    },

    deleteUser: (id) => {
        return axios.delete(`${baseURL}/api/users/${id}`, { withCredentials: true })
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

}

export default userAPI