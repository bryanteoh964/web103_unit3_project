import { request } from '../utilities/api'

const locationsURL = 'http://localhost:5001/api/locations'

const getAllLocations = () => request('GET', locationsURL)
const getLocationById = (id) => request('GET', `${locationsURL}/${id}`)

export default {
    getAllLocations,
    getLocationById
}