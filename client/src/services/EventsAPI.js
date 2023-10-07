import { request } from '../utilities/api'

const eventsURL = 'http://localhost:5001/api/events'

const getAllEvents = () => request('GET', eventsURL)
const getEventsByLocation = (id) => request('GET', `${eventsURL}/location/${id}`)
const getEventsById = (id) => request('GET', `${eventsURL}/${id}`)

export default {
    getAllEvents,
    getEventsByLocation,
    getEventsById
}