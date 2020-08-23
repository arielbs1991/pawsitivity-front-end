import Geocode from "react-geocode";

const geocodeThis = async (address1, city, state, postcode) => {
    if (!address1) return address1 = ''
    if (!city) return city = ''
    if (!state) return state = ''
    if (!postcode) return postcode = ''
    const addressString = `${address1} ${city}, ${state} ${postcode}`
    console.log(addressString)
    Geocode.setApiKey("AIzaSyDY_RILuF7Xq-yurPfk5rC1kNfdBzK2VU0");
    Geocode.setLanguage("en");
    Geocode.setRegion("us");
    let response = await Geocode.fromAddress(addressString)
    let locationObj = {
        lat: response.results[0].geometry.location.lat,
        lng: response.results[0].geometry.location.lng
    }
    return locationObj
}

export default geocodeThis;