import axios from "axios"
const BASEURL = 'http://localhost:3001/api/petAPI';

export default {
  search: function() {
    return axios.get(`${BASEURL}/pets/`, {
      withCredentials: true,
    });
  }
};
