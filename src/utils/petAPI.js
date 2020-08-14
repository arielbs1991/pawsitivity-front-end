import axios from "axios"
const BASEURL = 'http://localhost:3001/api/petAPI';

export default {
  search: function(type, location) {
    return axios.post(`${BASEURL}/pets/`, {

        type: type,
        location: location

    },{
      withCredentials: true,
    });
  }
};
