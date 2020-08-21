const axios = require("axios")
// const baseURL = "http://localhost:3001"
const baseURL = "https://pawsitivity-atack-api.herokuapp.com"
const userAPI = {

    findUser: (id) => {
        return axios.get(`${baseURL}/api/users/finduser/${id}`, { withCredentials: true })
    },

    createUser: (userData) => {
        return axios.post(`${baseURL}/api/users/`, userData, { withCredentials: true })
    },

    editAll: (userData) => {
        return axios.put(`${baseURL}/api/users/updateAll/`, userData, { withCredentials: true })
    },

    editUserName: (userData) => {
        return axios.put(`${baseURL}/api/users/userName/`, userData, { withCredentials: true })
    },

    editUserCity: (userData) => {
        return axios.put(`${baseURL}/api/users/city/`, userData, { withCredentials: true })
    },

    editUserFirstName: (userData) => {
        return axios.put(`${baseURL}/api/users/firstName/`, userData, { withCredentials: true })
    },

    editUserLastName: (userData) => {
        return axios.put(`${baseURL}/api/users/lastName/`, userData, { withCredentials: true })
    },

    editUserState: (userData) => {
        return axios.put(`${baseURL}/api/users/state/`, userData, { withCredentials: true })
    },

    editUserPostcode: (userData) => {
        return axios.put(`${baseURL}/api/users/postcode/`, userData, { withCredentials: true })
    },

    editUserPhoneNumber: (userData) => {
        return axios.put(`${baseURL}/api/users/phoneNumber/`, userData, { withCredentials: true })
    },

    editUserHasKids: (userData) => {
        return axios.put(`${baseURL}/api/users/hasKids/`, userData, { withCredentials: true })
    },

    editUserHasDogs: (userData) => {
        return axios.put(`${baseURL}/api/users/hasDogs/`, userData, { withCredentials: true })
    },

    editUserHasCats: (userData) => {
        return axios.put(`${baseURL}/api/users/hasCats/`, userData, { withCredentials: true })
    },

    editUserWhichSpecies: (userData) => {
        return axios.put(`${baseURL}/api/users/whichSpecies/`, userData, { withCredentials: true })
    },

    deleteUser: (userData) => {
        return axios.delete(`${baseURL}/api/users/`, userData,{ withCredentials: true })
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