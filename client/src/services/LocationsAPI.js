import { request } from '../utilities/api'

const locationsURL = 'http://localhost:5001/api/locations'

const getAllLocations = () => request('GET', locationsURL)

export default {
    getAllLocations
}